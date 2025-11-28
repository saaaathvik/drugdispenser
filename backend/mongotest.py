from pymongo import MongoClient

# Replace your actual password in the connection string
connection_string = "mongodb+srv://nikilesh:nikilesh@cluster0.d8ret.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# Create a client to connect to the MongoDB cluster
client = MongoClient(connection_string)

# Choose your database and collection
db = client['your_database_name']
collection = db['your_collection_name']

# Data to insert
data = {
    "name": "Nikilesh",
    "age": 25,
    "email": "nikilesh@example.com"
}

# Insert the data into the collection
insert_result = collection.insert_one(data)

# Print the ID of the inserted document
print(f"Data inserted with ID: {insert_result.inserted_id}")
