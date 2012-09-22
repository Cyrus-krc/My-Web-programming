<!DOCTYPE HTML>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en-US">
<head>
	<meta charset="UTF-8" />
	<title>SlideShow 01</title>
	<link rel="stylesheet" type="text/css" href="reset.css" />
	<link rel="stylesheet" type="text/css" href="slideshow.css" />
	<script type="text/javascript" src="slideshow.js" ></script>
</head>
<body>
	<div class="container">
		<div class="cover">
		</div>
		<div class="slideshow">
			
			<div class="train">
				<?php
					$images_path='./images';
					$images_thumbnails_path = "./images/thumbnail";
					$images = scandir($images_path);
						foreach($images as $img){
							$img_arr = explode('.',$img);
							$img_type = strtolower( end($img_arr) );
							if($img_type=='jpg'){
								echo "<div style=\"background-image:url('$images_path/$img');\"></div>";
							}
						}
				?>
			</div>
			<div class="previous"><div class="pvs"></div></div>
			<div class="next"><div class="nxt"></div></div>
			<ul class="btns">
				<?php
					$images_thumbnails = scandir($images_thumbnails_path);
					foreach($images_thumbnails as $thumb_img){
						$img_arr = explode('.',$thumb_img);
						$img_type = strtolower( end($img_arr) );
						if($img_type=='jpg'){
							echo "<li style=\"background-image:url('$images_thumbnails_path/$thumb_img');\"></li>";
						}
					}
				?>
			</ul>
		
	</div>
</div>
</body>
</html>