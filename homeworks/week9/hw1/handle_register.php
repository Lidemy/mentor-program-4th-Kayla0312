<?php
  require_once('conn.php');
  //如果欄位是空值，header 帶到 errCode=1，再由index.php 顯示錯誤提示
  if (
    empty($_POST['nickname']) ||
    empty($_POST['username']) ||
    empty($_POST['password'])
  ) {
    header('Location: register.php?errCode=1');
    die('資料不齊全');
  }

  $nickname = $_POST['nickname'];
  $username = $_POST['username'];
  $password = $_POST['password'];


  $sql = sprintf(
    "insert into kayla_users(nickname, username, password) values('%s', '%s', '%s')",
    $nickname,
    $username,
    $password
  );
  $result = $conn->query($sql);
  if (!$result) {
    $code = $conn->error;
    if ($code === "1062") {
      header('Location: register.php?errCode=2');
    }
    die($conn->error); //如果 query 錯誤是空的，顯示碰到的錯誤
  }

  header("Location: index.php");
?>
