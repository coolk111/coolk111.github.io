from flask import Flask
# app = Flask(__name__) #建立 app 物件，__name__代表目前執行的模組
app = Flask(__name__, static_folder='.', static_url_path='')

# 函式的裝飾 (Decorator): 已函式為基礎，提供附加的功能
# @app.route("/") # / 代表網站的跟目錄，用來回應網站首頁連線的函式
# def home():
#     return "Hello Flask"

# @app.route("/test") #代表 /test 路徑處理
# def test():
#     return "This is test"

@app.route("/")
def home():
    return app.send_static_file("flex.html")

if __name__ == "__main__":
    app.run() # 啟動伺服器

# __name__ : 內建的隱藏變數
# 1. 如果是被引用，其值是模組名稱
# 2. 如果是直接執行，其值會是 __main__

# if __name__ == "__main__":
#     app.run(port=9999, debug=True)
