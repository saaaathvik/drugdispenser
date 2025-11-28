from flask import Flask, request,jsonify
from flask_cors import CORS
from pymongo import MongoClient
import os
from img2table.document import PDF
from img2table.ocr import TesseractOCR
import pandas as pd 
import medicinelist


app = Flask(__name__)
CORS(app)


#!mongo setup

client=MongoClient("localhost",27017)
db=client.cartdb
cartcollection = db.cartcollection
	

#!api setup
@app.route('/',methods=['POST'])
def postcartmember():
    if request.method == 'POST':
        data=request.json

        if(data[0]['id']!=-1):
            print(data[0])
            try:
                db_data=cartcollection.find_one({"id":data[0]['id']})
                print(data[0])
                
                if(db_data==None):
                    data[0]['cart_quantity']=1
                    cartcollection.insert_one((data[0]))
                    
                else:
                    cartcollection.update_one({"id":data[0]['id']},{"$set":{'cart_quantity':db_data['cart_quantity']+1,'cost':db_data['cost']+(db_data['cost']/db_data['cart_quantity'])}})
            except:
                pass
        return data




@app.route('/getcart',methods=['GET'])
def getcartmember():
    if request.method == 'GET':
        cart=[x for x in cartcollection.find()]
        for i in cart:
            i['_id']=str(i['_id'])
        return (cart)



@app.route('/delcart',methods=['DELETE'])
def deletecartmember():
    if request.method=="DELETE":
        data=request.json
        if(data['cart_quantity']>1):
            cartcollection.update_one({"id":data['id']},{"$set":{"cost":data['cost']-(data['cost']/data['cart_quantity']),"cart_quantity":data['cart_quantity']-1}})
        else:
            cartcollection.delete_one({"id":data['id']})
        return data
    

@app.route('/uploadfile', methods=['POST'])
def uploadfile():
    if 'file' not in request.files:
        return 'No file part'
   
    file = request.files['file']

    if file.filename == '':
        return 'No selected file'
    
    try:
        save_directory = 'uploads'
        file.save(os.path.join(save_directory, file.filename))
        pdf = PDF(src=f"C:/Users/NIKILESH/OneDrive/Documents/VSCODE/ifp project/uploads/{file.filename}") 
        ocr = TesseractOCR(lang="eng")
        pdf_tables = pdf.extract_tables(ocr=ocr)	
        pdf.to_xlsx('C:/Users/NIKILESH/OneDrive/Documents/VSCODE/ifp project/uploads/table.xlsx',
            ocr=ocr)
        df =pd.read_excel('C:/Users/NIKILESH/OneDrive/Documents/VSCODE/ifp project/uploads/table.xlsx')
        for i in df['Medicine']:
           
            for j in medicinelist.L:
                
                if(i in j['name']):
                    j['cart_quantity']=1
                    cartproduct=cartcollection.find_one({"name":j['name']})
                    if(cartproduct==None):
                        j['cart_quantity']=1
                        cartcollection.insert_one(j)
                    else:
                        cartcollection.update_one({"name":j['name']},{"$set":{"cart_quantity":cartproduct["cart_quantity"]+1,"cost":cartproduct['cost']+(cartproduct['cost']/cartproduct['cart_quantity'])}})
        return 'File uploaded successfully'
    except Exception as e:
        return str(e)

if __name__ == "__main__":
    app.run(debug=True)


