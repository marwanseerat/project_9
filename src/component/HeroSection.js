import React from 'react'

function HeroSection() {
  return (
    <div>
        <div class="container col-xxl-8 px-4 py-5">
	<div class="row flex-lg-row-reverse align-items-center g-5 py-5">
		<div class="col-10 col-sm-8 col-lg-6">
			<img src="img/hero.png" alt="" loading="lazy" style={{height: '70vh'}}/>
		</div>
		<div class="col-lg-6">
			<div class="lc-block mb-3">
				<div editable="rich">
					<h2 class="fw-bold display-5">Technical Interview Questions for Freshers</h2>
				</div>
			</div>

			<div class="lc-block mb-3">
				<div editable="rich">
					<p class="lead">A well-planned strategy that includes the use of expert-curated interview questions and scientifically designed assessment solutions can help recruiters find the ideal job candidate. If you are looking to recruit professionals for an IT, engineering, or data science-related job, online technical tests can give you better results. 
					</p>
				</div>
			</div>

			<div class="lc-block d-grid gap-2 d-md-flex justify-content-md-start"><a class="btn btn-primary px-4 me-md-2" href="#" role="button">ِApply As Interviewer</a>
				<a class="btn btn-outline-secondary px-4" href="#" role="button">Apply As Job Seeker</a>
			</div>

		</div>
	</div>
</div>
    </div>
  )
}

export default HeroSection