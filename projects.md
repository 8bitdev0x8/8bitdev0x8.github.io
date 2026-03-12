---
layout: default
title: Projects
permalink: /projects/
---

<div id="top"></div>

<div class="quote-box">
	<p class="quote-text">"People who are really serious about software should make their own hardware."</p>
	<p class="quote-author">Alan Kay</p>
</div>

{% capture github_icon_markup %}
<svg height="18" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="18" class="octicon octicon-mark-github">
	<path fill="currentColor" d="M10.303 16.652c-2.837-.344-4.835-2.385-4.835-5.028 0-1.074.387-2.235 1.031-3.008-.279-.709-.236-2.214.086-2.837.86-.107 2.02.344 2.708.967.816-.258 1.676-.386 2.728-.386 1.053 0 1.913.128 2.686.365.666-.602 1.848-1.053 2.708-.946.3.581.344 2.085.064 2.815.688.817 1.053 1.913 1.053 3.03 0 2.643-1.998 4.641-4.877 5.006.73.473 1.224 1.504 1.224 2.686v2.235c0 .644.537 1.01 1.182.752 3.889-1.483 6.94-5.372 6.94-10.185 0-6.081-4.942-11.044-11.022-11.044-6.081 0-10.98 4.963-10.98 11.044a10.84 10.84 0 0 0 7.112 10.206c.58.215 1.139-.172 1.139-.752v-1.719a2.768 2.768 0 0 1-1.032.215c-1.418 0-2.256-.773-2.857-2.213-.237-.58-.495-.924-.989-.988-.258-.022-.344-.129-.344-.258 0-.258.43-.451.86-.451.623 0 1.16.386 1.719 1.181.43.623.881.903 1.418.903.537 0 .881-.194 1.375-.688.365-.365.645-.687.903-.902Z"></path>
</svg>
{% endcapture %}


## Repository

<div class="projects-index">
	<section class="projects-index-group">
		<h4>Hardware and Embedded</h4>
		<ul>
			{% for p in site.data.projects %}
				{% if p.category == "hardware" %}
					<li class="repo-link-item">
						<a href="{{ p.url }}">{{ p.title }}</a>
						{% if p.github %}
							<a class="repo-icon-link" href="{{ p.github }}" target="_blank" rel="noopener" aria-label="{{ p.title }} GitHub repository" title="GitHub repository">{{ github_icon_markup }}</a>
						{% endif %}
					</li>
				{% endif %}
			{% endfor %}
		</ul>
	</section>

	<section class="projects-index-group">
		<h4>Design and UI/UX</h4>
		<ul>
			{% for p in site.data.projects %}
				{% if p.category == "design" %}
					<li class="repo-link-item">
						<a href="{{ p.url }}">{{ p.title }}</a>
						{% if p.github %}
							<a class="repo-icon-link" href="{{ p.github }}" target="_blank" rel="noopener" aria-label="{{ p.title }} GitHub repository" title="GitHub repository">{{ github_icon_markup }}</a>
						{% endif %}
					</li>
				{% endif %}
			{% endfor %}
		</ul>
	</section>

	<section class="projects-index-group">
		<h4>AR/VR and Digital Twin</h4>
		<ul>
			{% for p in site.data.projects %}
				{% if p.category == "arvr" %}
					<li class="repo-link-item">
						<a href="{{ p.url }}">{{ p.title }}</a>
						{% if p.github %}
							<a class="repo-icon-link" href="{{ p.github }}" target="_blank" rel="noopener" aria-label="{{ p.title }} GitHub repository" title="GitHub repository">{{ github_icon_markup }}</a>
						{% endif %}
					</li>
				{% endif %}
			{% endfor %}
		</ul>
	</section>

	<section class="projects-index-group">
		<h4>Media</h4>
		<ul>
			{% for p in site.data.projects %}
				{% if p.category == "media" %}
					<li class="repo-link-item">
						<a href="{{ p.url }}">{{ p.title }}</a>
						{% if p.github %}
							<a class="repo-icon-link" href="{{ p.github }}" target="_blank" rel="noopener" aria-label="{{ p.title }} GitHub repository" title="GitHub repository">{{ github_icon_markup }}</a>
						{% endif %}
					</li>
				{% endif %}
			{% endfor %}
		</ul>
	</section>
</div>

## Hardware and Embedded

<section class="project-block">
	{% assign li_fi_project = site.data.projects | where: "url", "/projects/#li-fi-light-fidelity" | first %}
	<h3 id="li-fi-light-fidelity" class="project-title-row">Li-Fi (Light Fidelity)
		{% if li_fi_project.github %}
			<a class="repo-icon-link" href="{{ li_fi_project.github }}" target="_blank" rel="noopener" aria-label="Li-Fi (Light Fidelity) GitHub repository" title="GitHub repository">{{ github_icon_markup }}</a>
		{% endif %}
	</h3>
	<p>Li-Fi is a wireless communication technology that uses LED light instead of radio waves to transmit data. It offers much faster speeds than Wi-Fi, improved security since light cannot pass through walls, and is useful in environments like hospitals and airplanes.</p>
	<img src="/assets/img/projects/HARDWARE/users_cmgb13uge00w9sj014jrv7djf_LgY4emHp2qN9n1tw-IMG_0485.jpg" alt="Li-Fi Project" class="bento-project-img" />
</section>

<section class="project-block">
	{% assign serialpilot_project = site.data.projects | where: "url", "/projects/#serialpilot" | first %}
	<h3 id="serialpilot" class="project-title-row">SerialPilot
		{% if serialpilot_project.github %}
			<a class="repo-icon-link" href="{{ serialpilot_project.github }}" target="_blank" rel="noopener" aria-label="SerialPilot GitHub repository" title="GitHub repository">{{ github_icon_markup }}</a>
		{% endif %}
	</h3>
	<p>SerialPilot is an RC vehicle controlled through a serial interface. Commands are sent from a computer or microcontroller to steer and manage the vehicle over UART.</p>
	<img src="/assets/img/projects/HARDWARE/users_cmgb13uge00w9sj014jrv7djf_PMJ2hgmSpPle8FiQ-20150929_133900.jpg" alt="SerialPilot" class="bento-project-img" />
</section>

<section class="project-block">
	{% assign ir_module_project = site.data.projects | where: "url", "/projects/#ir-module-v1" | first %}
	<h3 id="ir-module-v1" class="project-title-row">IR Module v1
		{% if ir_module_project.github %}
			<a class="repo-icon-link" href="{{ ir_module_project.github }}" target="_blank" rel="noopener" aria-label="IR Module v1 GitHub repository" title="GitHub repository">{{ github_icon_markup }}</a>
		{% endif %}
	</h3>
	<p>CAD concept and render set for an infrared module prototype.</p>
	<div class="project-gallery-grid">
		<img src="/assets/img/projects/CAD/Ir%20module%20v1%20front.png" alt="IR Module v1 Front" class="bento-project-img" />
		<img src="/assets/img/projects/CAD/Ir%20module%20v1%20full%20view.png" alt="IR Module v1 Full View" class="bento-project-img" />
		<img src="/assets/img/projects/CAD/Ir%20module%20v1%20left.png" alt="IR Module v1 Left" class="bento-project-img" />
		<img src="/assets/img/projects/CAD/Ir%20module%20v1%20side.png" alt="IR Module v1 Side" class="bento-project-img" />
		<img src="/assets/img/projects/CAD/Ir%20module%20v1%20top.png" alt="IR Module v1 Top" class="bento-project-img" />
		<img src="/assets/img/projects/CAD/Ir%20module%20v1.jpg" alt="IR Module v1 Photo" class="bento-project-img" />
		<img src="/assets/img/projects/CAD/Ir%20module%20v1.png" alt="IR Module v1 Render" class="bento-project-img" />
	</div>
</section>

## Design and UI/UX

<section class="project-block">
	{% assign logo_design_project = site.data.projects | where: "url", "/projects/#logo-design" | first %}
	<h3 id="logo-design" class="project-title-row">Logo Design (Elixtra)
		{% if logo_design_project.github %}
			<a class="repo-icon-link" href="{{ logo_design_project.github }}" target="_blank" rel="noopener" aria-label="Logo Design (Elixtra) GitHub repository" title="GitHub repository">{{ github_icon_markup }}</a>
		{% endif %}
	</h3>
	<p>The Elixtra logo was designed in Adobe Illustrator to create a clean and adaptable identity for both digital and print use.</p>
	<div class="project-gallery-grid">
		<img src="/assets/img/projects/DESIGN/XL-Black@4x-100.jpg" alt="XL-Black" class="bento-project-img" />
		<img src="/assets/img/projects/DESIGN/XL-Color@4x-100.jpg" alt="XL-Color" class="bento-project-img" />
		<img src="/assets/img/projects/DESIGN/XL-Inverse@4x-100.jpg" alt="XL-Inverse" class="bento-project-img" />
		<img src="/assets/img/projects/DESIGN/XL-White@4x-100.jpg" alt="XL-White" class="bento-project-img" />
	</div>
</section>

<section class="project-block">
	{% assign price_comparison_project = site.data.projects | where: "url", "/projects/#price-comparison-app-ui-prototype" | first %}
	<h3 id="price-comparison-app-ui-prototype" class="project-title-row">Price Comparison App UI Prototype
		{% if price_comparison_project.github %}
			<a class="repo-icon-link" href="{{ price_comparison_project.github }}" target="_blank" rel="noopener" aria-label="Price Comparison App UI Prototype GitHub repository" title="GitHub repository">{{ github_icon_markup }}</a>
		{% endif %}
	</h3>
	<p>This prototype was developed as part of a master's project for comparing grocery prices across stores with clear navigation and quick comparison flows.</p>
	<div class="uiux-gallery">
		<div class="uiux-item">
			<img src="/assets/img/projects/UI/202.png" alt="Price Comparison App - Product List" class="bento-project-img" />
			<p><strong>Product List:</strong> Displays items with prices from multiple stores.</p>
		</div>
		<div class="uiux-item">
			<img src="/assets/img/projects/UI/201.png" alt="Price Comparison App - Store Selection" class="bento-project-img" />
			<p><strong>Store Selection:</strong> Lets users choose preferred stores.</p>
		</div>
		<div class="uiux-item">
			<img src="/assets/img/projects/UI/207.png" alt="Price Comparison App - Comparison View" class="bento-project-img" />
			<p><strong>Comparison View:</strong> Highlights savings across stores.</p>
		</div>
		<div class="uiux-item">
			<img src="/assets/img/projects/UI/203.png" alt="Price Comparison App - Cart" class="bento-project-img" />
			<p><strong>Cart:</strong> Shows total costs by store.</p>
		</div>
		<div class="uiux-item">
			<img src="/assets/img/projects/UI/206.png" alt="Price Comparison App - Checkout" class="bento-project-img" />
			<p><strong>Checkout:</strong> Streamlined purchase summary with savings.</p>
		</div>
	</div>
</section>

<section class="project-block">
	{% assign gomend_project = site.data.projects | where: "url", "/projects/#gomend-ui-design-and-prototype" | first %}
	<h3 id="gomend-ui-design-and-prototype" class="project-title-row">GoMend UI Design and Prototype
		{% if gomend_project.github %}
			<a class="repo-icon-link" href="{{ gomend_project.github }}" target="_blank" rel="noopener" aria-label="GoMend UI Design and Prototype GitHub repository" title="GitHub repository">{{ github_icon_markup }}</a>
		{% endif %}
	</h3>
	<p>GoMend focuses on usability, clear interaction flow, and accessible visual structure.</p>
	<p><a href="https://youtu.be/iIBwPSjvQzA">GoMend UI Design and Prototype (YouTube)</a></p>
	<div class="projects-embed">
		<iframe src="https://www.youtube.com/embed/iIBwPSjvQzA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
	</div>
</section>

<section class="project-block">
	{% assign mood_tax_project = site.data.projects | where: "url", "/projects/#mood-tax-a-dystopian-ui-design-on-emotional-debt" | first %}
	<h3 id="mood-tax-a-dystopian-ui-design-on-emotional-debt" class="project-title-row">Mood Tax: A Dystopian UI Design on Emotional Debt
		{% if mood_tax_project.github %}
			<a class="repo-icon-link" href="{{ mood_tax_project.github }}" target="_blank" rel="noopener" aria-label="Mood Tax GitHub repository" title="GitHub repository">{{ github_icon_markup }}</a>
		{% endif %}
	</h3>
	<p>Mood Tax is a speculative master's project that explores emotional debt through immersive UI storytelling and interactive flows.</p>
	<p><a href="https://youtu.be/qhgiZpLOff4">Mood Tax UI/UX Design and Prototype (YouTube)</a></p>
	<div class="projects-embed">
		<iframe src="https://www.youtube.com/embed/qhgiZpLOff4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
	</div>
</section>

## AR/VR and Digital Twin

<section class="project-block">
	{% assign virtual_forklift_project = site.data.projects | where: "url", "/projects/#virtual-forklift" | first %}
	<h3 id="virtual-forklift" class="project-title-row">Virtual Forklift - AR Collision Detection Prototype
		{% if virtual_forklift_project.github %}
			<a class="repo-icon-link" href="{{ virtual_forklift_project.github }}" target="_blank" rel="noopener" aria-label="Virtual Forklift GitHub repository" title="GitHub repository">{{ github_icon_markup }}</a>
		{% endif %}
	</h3>
	<p>Virtual Forklift is a 1:1 augmented reality prototype for visualizing forklift movement and testing collision risks in real spaces.</p>
	<p><a href="https://youtu.be/lHfSzYoIINg">Virtual Forklift - AR Collision Detection Prototype (YouTube)</a></p>
	<div class="projects-embed">
		<iframe src="https://www.youtube.com/embed/lHfSzYoIINg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
	</div>
</section>

<section class="project-block">
	{% assign digital_twin_project = site.data.projects | where: "url", "/projects/#digital-twin-iot-mqtt-server" | first %}
	<h3 id="digital-twin-iot-mqtt-server" class="project-title-row">Digital Twin | IoT MQTT Server
		{% if digital_twin_project.github %}
			<a class="repo-icon-link" href="{{ digital_twin_project.github }}" target="_blank" rel="noopener" aria-label="Digital Twin | IoT MQTT Server GitHub repository" title="GitHub repository">{{ github_icon_markup }}</a>
		{% endif %}
	</h3>
	<p>MQTT-based IoT backend used to stream data into digital twin visualizations.</p>
	<p><a href="https://youtu.be/v_VExQuljdg">Digital Twin - IoT MQTT Server (YouTube)</a></p>
	<div class="projects-embed">
		<iframe src="https://www.youtube.com/embed/v_VExQuljdg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
	</div>
</section>

<section class="project-block">
	{% assign sfo_twin_project = site.data.projects | where: "url", "/projects/#sfo-airport-digital-twin--twinverse-platform" | first %}
	<h3 id="sfo-airport-digital-twin--twinverse-platform" class="project-title-row">SFO Airport Digital Twin - TwinVerse Platform
		{% if sfo_twin_project.github %}
			<a class="repo-icon-link" href="{{ sfo_twin_project.github }}" target="_blank" rel="noopener" aria-label="SFO Airport Digital Twin GitHub repository" title="GitHub repository">{{ github_icon_markup }}</a>
		{% endif %}
	</h3>
	<p>This project implements a digital twin of San Francisco International Airport using TwinVerse with live data integration for simulation and analytics.</p>
	<p><a href="https://www.travancoreanalytics.com/products/twinverse/">Learn more about TwinVerse</a></p>
	<p><a href="https://youtu.be/f47Q37g1FGo">SFO Airport Digital Twin Demo (YouTube)</a></p>
	<div class="projects-embed">
		<iframe src="https://www.youtube.com/embed/f47Q37g1FGo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
	</div>
</section>

<section class="project-block">
	{% assign vr_soldering_project = site.data.projects | where: "url", "/projects/#vr-soldering-training-simulator" | first %}
	<h3 id="vr-soldering-training-simulator" class="project-title-row">VR Soldering Training Simulator
		{% if vr_soldering_project.github %}
			<a class="repo-icon-link" href="{{ vr_soldering_project.github }}" target="_blank" rel="noopener" aria-label="VR Soldering Training Simulator GitHub repository" title="GitHub repository">{{ github_icon_markup }}</a>
		{% endif %}
	</h3>
	<p>Immersive training simulator designed to teach soldering procedures and safety in a virtual environment.</p>
	<div class="project-gallery-grid">
		<img src="/assets/img/projects/VR/users_cmgb13uge00w9sj014jrv7djf_70N0jwRWvlfeWpQD-Screenshot20202403.png" alt="VR Soldering Simulator - Step 1" class="bento-project-img" />
		<img src="/assets/img/projects/VR/users_cmgb13uge00w9sj014jrv7djf_NwLfVnkTvFz9UwE2-Screenshot20201212.png" alt="VR Soldering Simulator - Step 2" class="bento-project-img" />
		<img src="/assets/img/projects/VR/users_cmgb13uge00w9sj014jrv7djf_r24tIApmws55oKZv-Screenshot20202639.png" alt="VR Soldering Simulator - Step 3" class="bento-project-img" />
		<img src="/assets/img/projects/VR/users_cmgb13uge00w9sj014jrv7djf_wTeDEmGHx5xlUyHp-Screenshot20203059.png" alt="VR Soldering Simulator - Step 4" class="bento-project-img" />
	</div>
</section>

<section class="project-block">
	{% assign abu_dhabi_project = site.data.projects | where: "url", "/projects/#abu-dhabi-digital-twin" | first %}
	<h3 id="abu-dhabi-digital-twin" class="project-title-row">Abu Dhabi Digital Twin
		{% if abu_dhabi_project.github %}
			<a class="repo-icon-link" href="{{ abu_dhabi_project.github }}" target="_blank" rel="noopener" aria-label="Abu Dhabi Digital Twin GitHub repository" title="GitHub repository">{{ github_icon_markup }}</a>
		{% endif %}
	</h3>
	<p>Contribution to a city-scale digital twin with BIM integration, rendering improvements, and interactive sector-level navigation.</p>
	<p><a href="https://youtu.be/2I4-DqMxNY4">Abu Dhabi Digital Twin Demo (YouTube)</a></p>
	<div class="projects-embed">
		<iframe src="https://www.youtube.com/embed/2I4-DqMxNY4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
	</div>
</section>

## Media

<section class="project-block">
	{% assign bellarom_project = site.data.projects | where: "url", "/projects/#bellarom" | first %}
	<h3 id="bellarom" class="project-title-row">Bellarom
		{% if bellarom_project.github %}
			<a class="repo-icon-link" href="{{ bellarom_project.github }}" target="_blank" rel="noopener" aria-label="Bellarom GitHub repository" title="GitHub repository">{{ github_icon_markup }}</a>
		{% endif %}
	</h3>
	<p><a href="https://vimeo.com/1035192003/287bfb8b74">Bellarom (Vimeo)</a></p>
	<div class="projects-embed">
		<iframe src="https://player.vimeo.com/video/1035192003?h=287bfb8b74" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
	</div>
</section>

## Skills and Technologies

- AR/VR Development
- Augmented Reality
- Android
- Spatial Mapping
- CAD Design
- UI/UX
- Blender
- After Effects
- Visual Coding
- Videography
- Digital Twin
- Laser Cutting
- Light Baking

<a class="scroll-top-link" href="#top" aria-label="Scroll to top">&#8593;</a>



