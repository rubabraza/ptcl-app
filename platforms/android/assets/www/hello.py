from flask import Flask, render_template, json, request, session, redirect, url_for, send_from_directory, jsonify
from flaskext.mysql import MySQL
from flask_cors import CORS
from werkzeug import generate_password_hash, check_password_hash
from werkzeug.utils import secure_filename
import string

import requests
import os
from os.path import join, dirname, realpath



app = Flask(__name__)
CORS(app)
mysql = MySQL()

app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'abcd1234**'
app.config['MYSQL_DATABASE_DB'] = 'descon'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
mysql.init_app(app)


@app.route("/")
def hello():
    return render_template('sign-in.html')

@app.route("/test", methods=['POST','GET'])
def test():
  return 'THIS IS THE RETURN'



@app.route('/signin')
def api_article(empid):
    return 'You are reading'+empid



@app.route("/listofemployee")
def getDataFromDB():
            conn = mysql.connect()
            cur = conn.cursor()
            cur.callproc('descon_listofemployee',())
            data = cur.fetchall()
            return jsonify(data)

@app.route("/notifications")
def notifications():
            conn = mysql.connect()
            cur = conn.cursor()
            cur.callproc('descon_all_notification',())
            data = cur.fetchall()
            return jsonify(data)
        

@app.route("/postdata/empid=<id>", methods=['POST','GET'])
def sign_in(id):
    try:
        _name = id
    

        if _name:
            conn = mysql.connect()
            cur = conn.cursor()
            cur.callproc('descon_signin',(_name,))
            data = cur.fetchall()
            if len(data) is 0:
                conn.commit()
                return '0'            
            else:
                return "1"  
        else:
            return "No Input Found!"
    except Exception as e:
        return json.dumps({"error":str(e)})

@app.route("/emp_info/empid=<id>", methods=['POST','GET'])
def emp_info(id):
    try:
        _name = id
    

        if _name:
            conn = mysql.connect()
            cur = conn.cursor()
            cur.callproc('descon_emp_info',(_name,))
            data = cur.fetchall()
            if len(data) > 0:
                conn.commit()
                return jsonify(data)            
            else:
                return "0"  
        else:
            return "No Input Found!"
    except Exception as e:
        return json.dumps({"error":str(e)})

@app.route("/recog_emp_info/empname=<name>", methods=['POST','GET'])
def recog_emp_info(name):
    try:
        _name = name
    

        if _name: 
            conn = mysql.connect()
            cur = conn.cursor()
            cur.callproc('descon_recog_emp_info',(_name,))
            data = cur.fetchall()
            if len(data) > 0:
                conn.commit()
                return jsonify(data)            
            else:
                return "0"  
        else:
            return "No Input Found!"
    except Exception as e:
        return json.dumps({"error":str(e)})

@app.route("/recog_emp/recog_emp=<id>&recogby_emp=<id_by>&text=<text>", methods=['POST','GET'])
def recog_emp(id,id_by,text):
    try:
        _id = id
        _id_by = id_by
        _text = text

        if _id:
            conn = mysql.connect()
            cur = conn.cursor()
            cur.callproc('descon_recognize_emp',(_id,_id_by,_text,))
            data = cur.fetchall()
            if len(data) is 0:
                conn.commit()
                return "Successful!"            
            else:
                return "Failed!"  
        else:
            return "No Input Found!"
    except Exception as e:
        return json.dumps({"error":str(e)})        

@app.route("/breach/breach_emp=<id>&breach_text=<text>&count=<count>", methods=['POST','GET'])
def breach(id,text,count):
    try:
        _id = id
        _count = count
        _text = text

        if _id:
            conn = mysql.connect()
            cur = conn.cursor()
            cur.callproc('descon_breach',(_id,_text,_count))
            data = cur.fetchall()
            if len(data) is 0:
                conn.commit()
                return "Successful!"            
            else:
                return "Failed!"
    except Exception as e:
        return json.dumps({"error":str(e)})  


@app.route("/nextlevel_info/empid=<id>", methods=['POST','GET'])
def nextlevel_info(id):
    try:
        _name = id
    

        if _name:
            conn = mysql.connect()
            cur = conn.cursor()
            cur.callproc('descon_nextlevel_info',(_name,))
            data = cur.fetchall()
            if len(data) > 0:
                conn.commit()
                return jsonify(data)            
            else:
                return "0"  
        else:
            return "No Input Found!"
    except Exception as e:
        return json.dumps({"error":str(e)})

@app.route("/quiz_list/level=<id>", methods=['POST','GET'])
def quiz_list(id):
    try:
        _name = id
    

        if _name:
            conn = mysql.connect()
            cur = conn.cursor()
            cur.callproc('descon_quizlist',(_name,))
            data = cur.fetchall()
            if len(data) > 0:
                conn.commit()
                return jsonify(data)            
            else:
                return "0"  
        else:
            return "No Input Found!"
    except Exception as e:
        return json.dumps({"error":str(e)})

@app.route("/quiz_ques_and_ans/quizid=<id>", methods=['POST','GET'])
def quiz_ques_and_ans(id):
    try:
        _name = id
    

        if _name:
            conn = mysql.connect()
            cur = conn.cursor()
            cur.callproc('descon_quiz_ques_and_ans',(_name,))
            data = cur.fetchall()
            if len(data) > 0:
                conn.commit()
                return jsonify(data)            
            else:
                return "0"  
        else:
            return "No Input Found!"
    except Exception as e:
        return json.dumps({"error":str(e)})



@app.route("/halloffame/empid=<id>", methods=['POST','GET'])
def halloffame(id):
    try:
        _name = id
    

        if _name:
            conn = mysql.connect()
            cur = conn.cursor()
            cur.callproc('descon_halloffame',(_name,))
            data = cur.fetchall()
            if len(data) > 0:
                conn.commit()
                return jsonify(data)            
            else:
                return "0"  
        else:
            return "No Input Found!"
    except Exception as e:
        return json.dumps({"error":str(e)})


@app.route("/video/videoname=<name>", methods=['POST','GET'])
def video(name):
    try:
        _name = name
    

        if _name:
            conn = mysql.connect()
            cur = conn.cursor()
            cur.callproc('descon_video',(_name,))
            data = cur.fetchall()
            if len(data) > 0:
                conn.commit()
                return jsonify(data)            
            else:
                return "0"  
        else:
            return "No Input Found!"
    except Exception as e:
        return json.dumps({"error":str(e)})    

@app.route("/video_all")
def video_all():
            conn = mysql.connect()
            cur = conn.cursor()
            cur.callproc('descon_video_all',())
            data = cur.fetchall()
            return jsonify(data)





def sign_up():
    try:
        _email = request.form["email"]
        _empid = request.form["empid"]
        _dept = request.form["dept"]
        _location = request.form["location"]
        _time = request.form["time"]
        _empic = request.form["empic"]
        _desc = request.form["desc"]
        _hobbies = request.form["hobbies"]
        _aspir = request.form["aspir"]
        _job = request.form["job"]
        
        
   
        if _name:
            conn = mysql.connect()
            cur = conn.cursor()
            cur.callproc('descon_signup',( _email,_empid,_dept,_location,_time,_empic,_desc,_hobbies,_aspir,_job,))
            data = cur.fetchall()
            if len(data) is 0:
                conn.commit()
                return 'Sign Up Successful!'           
            else:
                return 'Sign Up Not Successful'
        else:
            return 'No input found!'
    except Exception as e:
        return json.dumps({"error":str(e)})








if __name__ == "__main__":
    app.run()

