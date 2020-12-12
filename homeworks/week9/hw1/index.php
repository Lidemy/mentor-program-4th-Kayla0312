<?php
  session_start();
  require_once("conn.php");
  require_once("utils.php");

  $username = NULL;
  /*先檢查是否有值在進行讀取 */
  if(!empty($_SESSION['username'])) {
      /* cookie 取 PHPSESSIONIS(token) -> 檔案內讀取 session id 內容 -> 放到$_SESSION */
    $username = $_SESSION['username'];
  };

  $result = $conn->query("select * from kayla_comments order by id DESC");
  if (!$result) {
    die('Error:' . $conn->error);
  };
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/css2?family=Unna&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
  <title>Message Board</title>
</head>
<body>
  <header class="board__header">
    <a class="header__title" href="#">Message<br>Board</a>
    <div class="header__button">
      <!-- 非登入狀態按鈕顯示:顯示註冊/登入按鈕 -->
      <?php if (!$username) { ?>
        <a class="header__link" href="login.php"><i class="fa fa-sign-in" aria-hidden="true"></i>Log in</a>
        <a class="header__link" href="register.php"><i class="fa fa fa-user" aria-hidden="true"></i>Sign Up</a>
      <?php } else { ?>
        <!-- 登入狀態按鈕顯示：只顯示登出按鈕 -->
        <a class="header__link" href="logout.php"><i class="fas fa-outdent" aria-hidden="true"></i>Log out</a>
      <?php } ?>
    </div>
  </header>
  <main class="board">
    <h1 class="board__title"><span>Comments</span></h1>
    <!-- 資料錯誤顯示 -->
    <?php if (!empty($_GET['errCode'])) {
      $code = $_GET['errCode'];
      $message = 'Error';
      if ($code === '1') { //$_GET 拿到會是字串
        $message = '資料不齊全，請重新輸入！';
      } 
      echo'<span class="error">' . $message . '</span>';
    }
    ?>
    <form class="board__new-comment-form" method="POST" action="handle_add_comment.php">
      </div>
      <textarea name="content" rows="10" placeholder="Leave your message here......"></textarea>
      <!-- 如果不是登入狀態，取消 submite 按鈕 -->
      <?php if ($username) { ?>
        <input class="board__submit-btn" type="submit" value="Submit" />
      <?php } else { ?>
        <h2>Log in and leave your message here......</h2>
      <?php } ?>
    </form>
    <section class="message__board">
      <?php
        while($row = $result->fetch_assoc()) {
      ?>
      <div class="card">
        <div class="card__avatar"></div>
        <div class="card__body">
            <div class="card__info">
              <span class="card__author"><?php echo $row['nickname']; ?></span>
              <span class="card__time"><?php echo $row['created_at']; ?></span>
              <p class="card__content"><?php echo $row['content']; ?></p>
            </div>
        </div>
      </div>
      <hr>
      <?php } ?>
    </section>
  </main>
</body>
</html>