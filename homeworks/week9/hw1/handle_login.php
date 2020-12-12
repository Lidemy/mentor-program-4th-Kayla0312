<?php
  session_start();
  require_once('conn.php');
  require_once('utils.php');
  //如果欄位是空值，header 帶到 errCode=1，再由index.php 顯示錯誤提示
  if (
    empty($_POST['username']) ||
    empty($_POST['password'])
  ) {
    header('Location: login.php?errCode=1');
    die('資料不齊全');
  }

  $password = $_POST['password'];
  $username = $_POST['username'];

  // 取到 user table 裡面欄位值->判斷是否有和Post輸入的相同
  $sql = sprintf(
    "select * from kayla_users where username = '%s'and password = '%s'",
    $username,
    $password
  );

  $result = $conn->query($sql);
  if (!$result) {
    die($conn->error); //如果 query 錯誤是空的，顯示碰到的錯誤
  }

  if ($result->num_rows) { //num_row 判斷結果有幾筆資料
    //設定 session (產生 session id(token) -> 把 username 寫入檔案 -> set-cookie:session id)
    $_SESSION['username'] = $username;
    header("Location: index.php");
  } else {
    header("Location: login.php?errCode=2");
  }
?>
