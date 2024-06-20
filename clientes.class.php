
 <?php
     require_once '../config/Conexion.class.php';
 


      class clientes{

          public $id; 
          public $nombre; 
          public $direccion; 
          public $telefono; 


       const TABLA = 'clientes';

        public function __construct(){
            $this->conex= Conexion::singleton_conexion();
        }

     public function listar_registros(){
            try {
                $sql  = "SELECT * FROM " . self::TABLA . " ";
                $query = $this->conex->prepare($sql);
                $query->execute();
                $res = $query->fetchAll(PDO::FETCH_ASSOC);
                if($query->rowCount()>0) return $res;
                else return false;
            } catch (PDOException $e) {
                print "Error al listar los registros de clientes-> ".$e;
            }
        }

        public function guardar_clientes(){
            
              try{
                  $sql = "INSERT INTO " . self::TABLA . "(id,nombre,direccion,telefono) VALUES (:id,:nombre,:direccion,:telefono)";
                  $query = $this->conex->prepare($sql);
                  $query->execute(array(
                    'id' =>$this->id,
                    'nombre' =>$this->nombre,
                    'direccion' =>$this->direccion,
                    'telefono' =>$this->telefono,
                           ));
                  if($query->rowCount()>0) return true;
                  else return $error;
              } catch (PDOException $e) {
                  $error = "Error al guardar registros de clientes -->: ".$e;
                  print($error);
              } 
          } 
      
      public function buscar_clientes_by_id(){
             try {
                $sql   = "SELECT * FROM " . self::TABLA . " WHERE id = :id";
                $query = $this->conex->prepare($sql);
                $query->execute(array(
                    ':id'=>$this->id
                    ));
                $res = $query->fetch();
                if($query->rowCount()>0) return $res;
                else return false;
            } catch (PDOException $e) {
                print "Error al buscar el clientes -> ".$e;
            }      

        } 

         public function actualizar_clientes(){
           try {    
                $sql = "UPDATE ".self::TABLA." SET nombre =:nombre, direccion =:direccion, telefono =:telefono WHERE id = :id";
                $query = $this->conex->prepare($sql);
             $query->execute(array(
                    'id' =>$this->id,
                    'nombre' =>$this->nombre,
                    'direccion' =>$this->direccion,
                    'telefono' =>$this->telefono,
                           ));
                if($query->rowCount()>0) return true;
                else return false;
            } catch (PDOException $e) {
                print "Error al actualizar  -> ".$e;
            }
        } 

      public function eliminar_clientes(){
            try {
                $sql   = "DELETE FROM " .self::TABLA. " WHERE id = :id";
                $query = $this->conex->prepare($sql);
                $query->execute(array(               
                ':id'=>$this->id
                ));
                if($query->rowCount()>0) return true;
                else  return false;
            } catch (PDOException $e) {
                print "Error :: en el proceso de eliminacion ".$e;
            }

        } 
       public function login(){
            try {
                 $sql  = "SELECT * FROM " . self::TABLA .  " WHERE nombre = :nombre and direccion = :direccion";
                $query = $this->conex->prepare($sql);
                $query->execute(array(
                    ':nombre'=>$this->nombre,
                    ':direccion'=>$this->direccion
                ));
                $res = $query->fetch();
                if($query->rowCount()>0) return $res;
                else return false;
            }catch (PDOException $e) {
                print "Error: 0 -> ".$e;
            } 
        }  }

         ?>
