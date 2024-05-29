   <?php
   $query = $_GET['q'];
   $files = glob('artist/*.htm'); // لیست فایل‌های موجود در پوشه product/
   
   foreach($files as $file) {
       $fileName = pathinfo($file, PATHINFO_FILENAME);
       if (strpos($fileName, $query) !== false) {
           echo "<a style='text-align: center;color:blue;' href='$file'>
           $fileName
           <img width='60px' src='artist/$fileName.jpg'>
           </a><br>";

       }
   }
   ?>
   