---
title: About
permalink: /about/
layout: page
comments: false
---

<section class="about-3dbar-section">
	<div class="about-3dbar-labels">
		<span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
	</div>
	<a href="https://github.com/8bitdev0x8" target="_blank" rel="noopener noreferrer" aria-label="Open GitHub profile">
		<img id="contributions-3dbar" src="https://ssr-contributions-svg.vercel.app/_/8bitdev0x8?chart=3dbar&format=svg&legend=true&scale=2.5&dark=false" alt="GitHub Contributions 3D Bar" width="100%" />
	</a>
</section>
<script>
	(function () {
		const img = document.getElementById("contributions-3dbar");
		if (!img) return;
		const baseUrl = "https://ssr-contributions-svg.vercel.app/_/8bitdev0x8?chart=3dbar&format=svg&legend=true&scale=2.5&dark=";
		const syncTheme = () => {
			const isDark = document.body.classList.contains("dark");
			img.src = baseUrl + isDark;
		};
		syncTheme();
		const observer = new MutationObserver(syncTheme);
		observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
	})();
</script>

Jojy is a creative technologist and immersive experience designer passionate about blending design, interactivity, and technology to craft meaningful digital experiences.

Having completed a Master’s in Interaction and Experience Design, he brings together a strong technical foundation in C#, C++, Unity3D, and Unreal Engine with a deep curiosity for human-centered design.

Over the past few years, he has worked on projects that merge virtual reality, mixed reality, and interactive systems — from developing a full-scale Meta Quest training simulator to creating immersive AR/VR experiences for brands and entertainment.

He loves pushing the boundaries of what’s possible with emerging technology — whether prototyping futuristic interfaces, designing 3D interactions, or exploring the intersection of art and computation.

When not experimenting with code or 3D worlds, he can be found exploring design trends, building side projects, or travelling to find inspiration in new cultures and experiences.

<section class="about-linkedin-section">
	<h3>Connect On LinkedIn</h3>
	<a class="linkedin-profile-card" href="https://ie.linkedin.com/in/jojysaju" target="_blank" rel="noopener noreferrer" aria-label="Open Jojy S. LinkedIn profile">
		<span class="linkedin-profile-card__logo" aria-hidden="true">
			<svg viewBox="0 0 24 24" role="img" focusable="false">
				<path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.34 10.01H5.67V18H8.34V10.01ZM7 5.75A1.55 1.55 0 1 0 7 8.85A1.55 1.55 0 1 0 7 5.75ZM18.33 13.5C18.33 11.05 16.89 9.86 15.15 9.86C13.75 9.86 13.13 10.63 12.78 11.17V10.01H10.22V18H12.89V13.82C12.89 12.72 13.1 11.65 14.46 11.65C15.8 11.65 15.82 12.9 15.82 13.89V18H18.5L18.33 13.5Z"/>
			</svg>
		</span>
		<span class="linkedin-profile-card__meta">
			<strong>Jojy S.</strong>
			<span>View LinkedIn Profile</span>
		</span>
	</a>
</section>


