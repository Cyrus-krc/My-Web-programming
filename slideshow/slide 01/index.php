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
		<div class="slideshow">
			<div class="cover">
			<div class="train">
				<?php
					$images_path='./images';
					$images = scandir($images_path);
					$slidesLen = 0;
						foreach($images as $img){
							$img_arr = explode('.',$img);
							$img_type = strtolower( end($img_arr) );
							if($img_type=='jpg'){
								echo "<div style=\"background-image:url('$images_path/$img');\"></div>";
								$slidesLen++;
							}
						}
				?>
			</div>
			<div class="previous"><div class="pvs"></div></div>
			<div class="next"><div class="nxt"></div></div>
			<ul class="btns">
				<?php
					for($li;$li<$slidesLen;$li++){
						echo "<li style=\"background-image:url('$images_path/$img');\"></li>";
					}
				?>
			</ul>
		</div>
	</div>
</body>
</html>