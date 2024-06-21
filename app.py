from flask import Flask, render_template, request
from resumeFunctions import *

fNames = ["firstName", "lastName", "phone", "email", "fullName", "linkedIn", "addressLine1", "city", "state", "country", "zipCode", "password", "startDate1", "endDate1", "companyName1", "title1", "describe1", "startDate2", "endDate2", "companyName2", "title2", "describe2", "startDate3", "endDate3", "companyName3", "title3", "describe3", "startDate4", "endDate4", "companyName4", "title4", "describe4", "universityName", "major", "degree", "grad", "courseName1", "courseInstitute1", "courseName2", "courseInstitute2", "courseName3", "courseInstitute3", "courseName4", "courseInstitute4"]
fValues = [firstName, lastName, phone, email, fullName, linkedIn, addressLine1, city, state, country, zipCode, password, startDate1, endDate1, companyName1, title1, describe1, startDate2, endDate2, companyName2, title2, describe2, startDate3, endDate3, companyName3, title3, describe3, startDate4, endDate4, companyName4, title4, describe4, universityName, major, degree, grad, courseName1, courseInstitute1, courseName2, courseInstitute2, courseName3, courseInstitute3, courseName4, courseInstitute4]

app = Flask(__name__)

@app.route("/", methods=["POST", "GET"])
def home():
    if request.method == "POST":
        functionName = request.form.get("functionName")
        if functionName in fNames:
            fValues[fNames.index(functionName)]()

        print(functionName)
    return render_template("index.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0")
    # app.run(host="0.0.0.0", port=443)