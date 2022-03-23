from flask import Flask, jsonify
from flaskext.mysql import MySQL

app = Flask(__name__)
mysql = MySQL()

# MySQL configurations
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'Monze@2019'
app.config['MYSQL_DATABASE_DB'] = 'PRESLY'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'

mysql.init_app(app)



# ###Models####
# class Product(db.Model):
#     __tablename__ = "products"
#     id = db.Column(db.Integer, primary_key=True)
#     title = db.Column(db.String(20))
#     productDescription = db.Column(db.String(100))
#     productBrand = db.Column(db.String(20))
#     price = db.Column(db.Integer)

#     def create(self):
#       db.session.add(self)
#       db.session.commit()
#       return self
#     def __init__(self,title,productDescription,productBrand,price):
#         self.title = title
#         self.productDescription = productDescription
#         self.productBrand = productBrand
#         self.price = price
#     def __repr__(self):
#         return '' % self.id
# db.create_all()

@app.route('/')
def get():
    cur = mysql.connect().cursor()
    cur.execute('''select * from PRESLY.MARKETS''')
    r = [dict((cur.description[i][0], value)
                for i, value in enumerate(row)) for row in cur.fetchall()]
    return jsonify({'myCollection' : r})

if __name__ == '__main__':
    app.run()