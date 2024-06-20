
 <?php

      class Conexion{
        
        private static $instancia;
        private $conex;
       
        private function __construct(){
          try{
            $this->conex = new PDO('mysql:host=localhost;dbname=store','root','');
            $this->conex->exec("SET CHARACTER SET utf8");
            $this->conex->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
          }catch(PDOExeption $e){
            print "Error!:".$e->getMessage();
            die();
          }
        }

        public function prepare($sql){
          return $this->conex->prepare($sql);
        }

        public static function singleton_conexion(){
          if(!isset(self::$instancia)){
            $miCalse = __CLASS__;
            self::$instancia = new $miCalse;
          }
          return self::$instancia;
        }

        public function __clone(){
          trigger_error('La clonación de este objeto no está permitida', E_USER_ERROR);
        }

      }

   ?>
