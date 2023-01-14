import sys

from flask import Flask, jsonify, request

from entities import Route

PORT = int(sys.argv[1]) if len(sys.argv) >= 2 else 9000

# set of all teams
# !TODO: replace by database access

app = Flask(__name__)
app.config["DEBUG"] = True


@app.route('/api/routes/', methods=['GET'])
def get_routes():
    routes = []
    #Este metodo é suposto dar select de tudo da tabela routes e retornar um json
    db_rel = psycopg2.connect(host='db-rel', database='is', user='is', password='is')

    
    cursor = db_rel.cursor()
    cursor.execute("SELECT src FROM converted_documents")

    for row in cursor.fetchall():
        src_from_converted_docs.append(row[0])

    return jsonify([route.__dict__ for route in routes])





if __name__ == '__main__':
    app.run(host="0.0.0.0", port=PORT)
