<?php
  require_once('conn.php');
  // 輸出 json 格式資料
  header('Content-type:application/json;charest=utf-8');
  header('Access-Control-Allow-Origin: *');


  // 錯誤處理
  if (
    empty($_POST['todo'])
  ) {
    $json = array(
      "ok" => false,
      "message" => "Please input missing data"
    );

    $response = json_encode($json);
    echo $response;
    die();
  }

  $todo = $_POST['todo'];

  $sql = "INSERT INTO kayla_todos(todo) VALUES (?)";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('s', $todo);
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
    "message" => "Success",
    "id" => $conn->insert_id //get last insert id
  );
  $response = json_encode($json);
  echo $response;
?>
