<?php

class Calculator {
    public function calculate($num1, $num2, $operator) {
        switch ($operator) {
            case '+':
                $result = $num1 + $num2;
                break;
            case '-':
                $result = $num1 - $num2;
                break;
            case '*':
                $result = $num1 * $num2;
                break;
            case '/':
                $result = ($num2 != 0) ? $num1 / $num2 : "Cannot divide by zero";
                break;
            default:
                $result = "Invalid operator";
        }
        return $result;
    }
}
$calculator = new Calculator();
$num1 = $_POST['num1'];
$num2 = $_POST['num2'];
$operator = $_POST['operator'];
$result = $calculator->calculate($num1, $num2, $operator);
echo json_encode(['result' => $result]);

?>
