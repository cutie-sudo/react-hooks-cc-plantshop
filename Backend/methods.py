from fastapi import FastAPI
from pydantic import BaseModel
import json
import os
import requests


response = requests.get('http://127.0.0.1:8000')

app = FastAPI()

DB_FILE_PATH = "db.json"




class Plant(BaseModel):
    id: int
    name: str
    image: str
    price: float

 

def read_db ():
   
    if os.path.exists(DB_FILE_PATH):
        with open(DB_FILE_PATH, "r") as f:
            return json.load(f)
    return {"plants": []}

    

def write_db(data):
    """Write data to the db.json file."""
    with open(DB_FILE_PATH, "w") as f:
        json.dump(data, f, indent=4)



@app.get("/plants")
def get_plants():
    plants = read_db()
    print("Plants data:", data["plants"])
    return plants


      