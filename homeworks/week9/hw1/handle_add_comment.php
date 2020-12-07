<?php
  session_start();
  require_once('conn.php');
  require_once('utils.php');
  //如果欄位是空值，header 帶到 errCode=1，再由index.php 顯示錯誤提示
  if (
    empty($_POST['content'])
  ) {
    header('Location: index.php?errCode=1');
    die('資料不齊全');
  }
 
  $user = getUserFromUsername($_SESSION['username']);
  $nickname = $user['nickname'];
  $content = $_POST['content'];

  $sql = sprintf(
    "insert into kayla_comments(nickname, content) values('%s', '%s')",
    $nickname,
    $content
  );
  $result = $conn->query($sql);
  if (!$result) {
    die($conn->error); //如果 query 錯誤是空的，顯示碰到的錯誤
  }
  header("Location: index.php");
?>
