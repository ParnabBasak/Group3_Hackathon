import sys 
import pandas as pd
from pandas import read_csv
# Takes first name and last name via command  
# line arguments and then display them 
print("Output from Python") 
print("Path name: " + sys.argv[1]) 

series = read_csv(sys.argv[1])
print(sys.argv[1], " File Read Successfully.")