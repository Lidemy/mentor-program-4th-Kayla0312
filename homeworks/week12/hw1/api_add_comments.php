<?php
  require_once('conn.php');
  // 輸出 json 格式資料
  header('Content-type:application/json;charest=utf-8');
  header('Access-Control-Allow-Origin: *');


  // 錯誤處理
  if (
    empty($_POST['content']) ||
    empty($_POST['nickname']) ||
    empty($_POST['site_key'])
  ) {
    $json = array(
      "ok" => false,
      "message" => "Please input missing data"
    );

    $response = json_encode($json);
    echo $response;
    die();
  }

  $site_key = $_POST['site_key'];
  $nickname = $_POST['nickname'];
  $content = $_POST['content'];

  $sql = "INSERT INTO kayla_discussions(site_key, nickname, content) VALUES (?, ?, ?)";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('sss', $site_key, $nickname, $content);
  $result = $stmt->execute();

  if (!$result) {
    $json = array(
      "ok" => false,
      "message" => $conn->error
    );
    $response = json_encode($json);
    echo $response;
    die();
  }
  $json = array(
    "ok" => true,
    "message" => "Success"
  );
  $response = json_encode($json);
  echo $response;
?>
