import pandas as pd
import json

# 读取 Excel 文件
excel_file = 'hospital_info_sorted.xlsx'
xls = pd.ExcelFile(excel_file)

# 创建一个字典来存储所有区的医院信息
all_districts = {}

# 遍历每个 sheet，获取每个区的医院信息
for sheet_name in xls.sheet_names:
    df = pd.read_excel(excel_file, sheet_name=sheet_name)
    hospitals = df.to_dict(orient='records')
    all_districts[sheet_name] = hospitals

# 将字典转换为 JSON 并保存到文件
with open('hospitals.json', 'w', encoding='utf-8') as json_file:
    json.dump(all_districts, json_file, ensure_ascii=False, indent=4)
