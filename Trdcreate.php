<?php
    include '../../connection/conect.php';

    if(isset($_POST['btnFTsave'])){
$ProductName=$_POST['TrendingName'];
$pDescription=$_POST['TrendingDescription'];
$pPrice=$_POST['TrendingPrice'];
$img_name=$_FILES['upload']['name'];
$tmp=$_FILES['upload']['tmp_name'];
$path='../../Upload/TrendingPRD/';
move_uploaded_file($tmp,$path.$img_name);
$SQE="INSERT INTO `tbl_trending`(`Trending_Id`, `Trending_Name`, `Trending_Description`, `Treding_Price`, `Trending_Image`)
 VALUES (null,'$ProductName','$pDescription','$pPrice','$img_name')";
$respond=$con->query($SQE);
header('location:Trdinterface.php');
    };


    if(isset($_GET['action'])=='delete'){
$idD=$_GET['id'];
$delete="DELETE FROM `tbl_trending` WHERE `Trending_Id` = $idD ";
$show=$con->query($delete);
header('location:Trdinterface.php');
    };


    if(isset($_POST['btnFTupdate'])){
        $UpId=$_POST['TrendingId'];
        $UProductName=$_POST['TrendingName'];
        $UpDescription=$_POST['TrendingDescription'];
        $UpPrice=$_POST['TrendingPrice'];
        $Image=$_POST['upload'];
        $update="UPDATE `tbl_trending` SET `Trending_Name`='$UProductName',`Trending_Description`='$UpDescription',
        `Treding_Price`='$UpPrice',`Trending_Image`=' $Image'
         WHERE `Trending_Id`=$UpId";
        $excute=$con->query($update);
        header('location:Trdinterface.php');}


?>