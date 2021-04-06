<?php
  require_once('conn.php');
  // 輸出 json 格式資料
  header('Content-type:application/json;charest=utf-8');
  header('Access-Control-Allow-Origin: *');

  // 錯誤處理
  if (
    empty($_GET['id'])
  ) {
    $json = array(
      "ok" => false,
      "message" => "Please input id in URL"
    );
    $response = json_encode($json);
    echo $response;
    die();
  }

  $id = intval($_GET['id']);

  $sql = 
  "SELECT id, todo FROM kayla_todos WHERE id = ? ";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('i', $id);
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

  $result = $stmt->get_result();
  //$todo = array();
  $row = $result->fetch_assoc();
  $json = array(
    "ok" => true,
    "data" => array(
      "id" => $row['id'],
      "todo" => $row['todo']
    )
  );

  $response = json_encode($json);
  echo $response;
?>