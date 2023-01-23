<template>
   
		
		<footer v-if="this.$route.path == '/LayoutUserView'" class="footer-07 bg-dark">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-md-12 text-center">
						<h2 class="footer-heading"><p href="#" class="logo">Xavi's code</p></h2>
						<p class="footer-heading-menu">
							Thanks for stopping by
						</p>
						<hr>
						<ul class="footer-heading-social p-0">
                            <li class="ftco-animate"><a href="https://www.linkedin.com/in/javier-garcia-urruchi-5b14a4192/" data-toggle="tooltip" data-placement="top" title="linkedin"><i class="fab fa-linkedin"></i></a></li>
                            <li class="ftco-animate"><a href="https://github.com/vivimparable?tab=repositories" data-toggle="tooltip" data-placement="top" title="github"><i class="fab fa-github"></i></a></li>
                        </ul>
					</div>
				</div>
				
			</div>
		</footer>
			
</template>

<style scoped lang="scss">
//locals generals css//

hr{
	color: white;
}
a {
	cursor: pointer;
	transition: .3s all ease;
	&:hover {
		text-decoration: none !important;
		outline: none !important;
	}
}

//code//

footer{padding: 7em 0;

	.footer-heading{
		font-size: 30px;
		color: white;
		font-weight: 700;
		margin-bottom: 30px;
		.logo{
			color: rgb(255, 255, 255);
		}
	}

	.footer-heading-menu{
		margin-bottom: 30px;
		a{
			color: rgba(255,255,255,.6);
			margin: 0 10px;
			text-transform: uppercase;
			letter-spacing: 1px;
		}
	}
.footer-heading-social {

	li {
		list-style: none;
		margin: 0 10px 0 0;
		display: inline-block;
        
		a {
			color: rgb(255, 255, 255);

			height: 40px;
			width: 40px;
			display: block;
			border: 1px solid rgb(255, 255, 255);
			border-radius: 50%;
			position: relative;
			i {
				position: absolute;
				font-size: 20px;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}
			&:hover {
				color: white;
                transform: scale(1.2,1.2);
			}
		}
	}
}
}

</style>