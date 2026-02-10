import mysql.connector

conn = mysql.connector.connect(
    host="localhost",
    user="seu_usuario",
    password="sua_senha",
    database="seu_banco"
)

cursor = conn.cursor()
cursor.execute("SELECT * FROM sua_tabela")
for row in cursor.fetchall():
    print(row)

cursor.close()
conn.close()