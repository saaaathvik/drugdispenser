# Automated Drug Dispensing System

---

## Overview

The system aims to reduce hospital queue times by automating the medicine dispensing process. It scans printed prescriptions using a camera, processes the image to extract medicines and dosages, displays them in a web interface, and enables users to confirm the order. The project improves accuracy, efficiency, and accessibility for patients.

---

## Components

### Backend (Flask)
Located in `/backend/`.

Handles:
- Communication between frontend and IoT hardware
- Order and billing operations

### Frontend (React)
Located in `/frontend/`.

Features:
- Upload or scan prescription interface
- Display of detected scheduled and OTC medicines
- Shopping cart and order confirmation flow

### OCR Notebook
`ocr.ipynb`

Includes:
- OCR extraction of medicine names and dosages
  
---

## Hardware Integration

The backend can interface with the hardware components, including:
- Raspberry Pi 4
- Stepper motors and drivers for dispensing

---

## Features

- IoT-enabled dispensing process  
- OCR-based prescription reading  
- Web interface for OTC and prescribed drugs  
- Accurate dosage extraction  
- Automated dispensing and billing

---

## Project Background

The project provides an automated, reliable, and efficient medicine dispensing workflow to address hospital overcrowding and improve accessibility, particularly for senior citizens and patients requiring assistance.

---

## Contributors

B Saathvik, Nikilesh Jayaguptha, Abhishek K R, Dr. Thenmozhi Durairaj - Internally Funded Student Project 2023 (INR 14,000)
