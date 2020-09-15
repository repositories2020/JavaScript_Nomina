<?php 
class db 
{
	public $mysql=null;
	function __construct() 
	{
		try
		{
			$this ->mysql= $this->getConnection();
		}
		catch(PDOException $ex)
		{
			echo $ex->getMessage ();
		}
	}
	private function getConnection()
	{
		$host="localhost";
		$port="3306";
		$user="root";
		$pass= "";
		$database = "Nomina";
		$charset = "utf8";
		$opt = [PDO::ATTR_DEFAULT_FETCH_MODE => PDO:: FETCH_ASSOC];
		$pdo = new pdo("mysql:host={$host};port={$port};dbname={$database}; charset={$charset}",$user,$pass, $opt);
		$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		return $pdo;
	} 

}

?>