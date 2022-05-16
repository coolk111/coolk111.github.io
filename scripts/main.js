var myImage = document.querySelector('img');
// var myImage = document.getElementById('photo');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/BMW.jpg') {
      myImage.setAttribute ('src','images/Blur IWC.jpg');
    } else {
      myImage.setAttribute ('src','images/BMW.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

// 我們呼叫一個名稱為 localStorage 的 API，
// 這個 API 可以讓使用者先將一些資料儲存在瀏覽器裡面，之後有需要的話再取出來使用。
// 我們使用 localStorage 的 setItem() 函式來建立並且把資料儲存到一個名稱為 'name' 的變數裡，
// 再把包含者用者名字的 myName 的值指定給她。
// 最後，我們將一個字串跟使用者的名字指定給標題的 innerHTML 特性：
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === 'null') {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
}


// 這個區塊一開始使用了邏輯負運算子（邏輯非）來檢查 name 這個物件是否存在。
// 如果沒有，那就執行 setUserName() 這個函式並且創造她。
// 如果有了（例如：使用者已經在上一次造訪網頁時就設定過了），我們就使用 getItem() 函式來取得儲存的名字，
// 並且將標題的 innerHTML 特性設定為一個字串加上使用者的名字，
// 也就是我們在 setUserName() 函式裡做的事情。
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

// 最後，把以下的 onclick 事件處理器跟按鈕綁定，如此一來，每次點選按鈕時就會執行 setUserName()
// 這將允許使用者透過點選那個按鈕來重新設定一個新的名字：
// 這組客製化過的訊息是存在 localStorage 裡的，所以即使您將網頁關起來，
// 她還是會保留著，所以當您下次開啟這個網頁時，這段客製化的訊息依然會出現！
myButton.onclick = function() {
    setUserName();
}
  