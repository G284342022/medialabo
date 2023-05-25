// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let keka = document.querySelector('button#kaito');
keka.addEventListener('click',hantei);


// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  let pi = document.querySelector('p#result');
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let kazu = document.querySelector('input[name="seisu"]');
  let yoso = kazu.value;
  let kai = Math.floor(yoso);
  let an = document.querySelector('span#answer');
  an.textContent = kai;
  let me = document.querySelector('span#kaisu');
  kaisu = kaisu + 1;
  me.textContent = kaisu;

  pi.textContent = kaisu + '回目の予想:' + kai;
  if (kaisu < 3) {
    if(kai === kotae) {
    pi.textContent = '正解です.おめでとう！';
    }else if (kai < kotae) {
      pi.textContent = '間違い. 答えはもっと大きいですよ';
    }else {
      pi.textContent = '間違い.答えはもっと小さいですよ';
    }
  }else if (kaisu === 3) {
    if(kai === kotae) {
        pi.textContent = '正解です.おめでとう！';
        }else {
          pi.textContent = '間違い. 残念でした 答えは ' + kotae + 'です';
        }
  }else {
    pi.textContent = '答えは ' + kotae + 'でした. 既にゲームは終わっています';
  }
}