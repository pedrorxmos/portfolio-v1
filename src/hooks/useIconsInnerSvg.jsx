export const useIconsInnerSVG = (value) => {
	const svgMap = {
		'arrow-down': (
			<>
				<line x1="12" y1="5" x2="12" y2="19"></line>
				<polyline points="19 12 12 19 5 12"></polyline>
			</>
		),
		'arrow-left': (
			<>
				<line x1="19" y1="12" x2="5" y2="12"></line>
				<polyline points="12 19 5 12 12 5"></polyline>
			</>
		),
		'arrow-right': (
			<>
				<line x1="5" y1="12" x2="19" y2="12"></line>
				<polyline points="12 5 19 12 12 19"></polyline>
			</>
		),
		'arrow-up': (
			<>
				<line x1="12" y1="19" x2="12" y2="5"></line>
				<polyline points="5 12 12 5 19 12"></polyline>
			</>
		),
		'at-sign': (
			<>
				<circle cx="12" cy="12" r="4"></circle>
				<path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
			</>
		),
		'chevron-down': (
			<>
				<polyline points="6 9 12 15 18 9"></polyline>
			</>
		),
		codepen: (
			<>
				<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
				<line x1="12" y1="22" x2="12" y2="15.5"></line>
				<polyline points="22 8.5 12 15.5 2 8.5"></polyline>
				<polyline points="2 15.5 12 8.5 22 15.5"></polyline>
				<line x1="12" y1="2" x2="12" y2="8.5"></line>
			</>
		),
		x: (
			<>
				<line x1="18" y1="6" x2="6" y2="18"></line>
				<line x1="6" y1="6" x2="18" y2="18"></line>
			</>
		),
		'external-link': (
			<>
				<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
				<polyline points="15 3 21 3 21 9"></polyline>
				<line x1="10" y1="14" x2="21" y2="3"></line>
			</>
		),
		github: (
			<>
				<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
			</>
		),
		hash: (
			<>
				<line x1="4" y1="9" x2="20" y2="9"></line>
				<line x1="4" y1="15" x2="20" y2="15"></line>
				<line x1="10" y1="3" x2="8" y2="21"></line>
				<line x1="16" y1="3" x2="14" y2="21"></line>
			</>
		),
		heart: (
			<>
				<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
			</>
		),
		linkedin: (
			<>
				<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
				<rect x="2" y="9" width="4" height="12"></rect>
				<circle cx="4" cy="4" r="2"></circle>
			</>
		),
		mail: (
			<>
				<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
				<polyline points="22,6 12,13 2,6"></polyline>
			</>
		),
		menu: (
			<>
				<path d="M3 6L6.78597 4.73801C8.18932 4.27023 9.72777 4.44786 10.9876 5.22314L13.4419 6.73347C14.742 7.53355 16.3364 7.69585 17.7711 7.17415L21 6" />
				<path d="M3 12L6.78597 10.738C8.18932 10.2702 9.72777 10.4479 10.9876 11.2231L13.4419 12.7335C14.742 13.5336 16.3364 13.6958 17.7711 13.1741L21 12" />
				<path d="M3 18L6.78597 16.738C8.18932 16.2702 9.72777 16.4479 10.9876 17.2231L13.4419 18.7335C14.742 19.5336 16.3364 19.6958 17.7711 19.1741L21 18" />
			</>
		),
		'message-circle': (
			<>
				<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
			</>
		),
		moon: (
			<>
				<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
			</>
		),
		send: (
			<>
				<line x1="22" y1="2" x2="11" y2="13"></line>
				<polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
			</>
		),
		sun: (
			<>
				<circle cx="12" cy="12" r="5"></circle>
				<line x1="12" y1="1" x2="12" y2="3"></line>
				<line x1="12" y1="21" x2="12" y2="23"></line>
				<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
				<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
				<line x1="1" y1="12" x2="3" y2="12"></line>
				<line x1="21" y1="12" x2="23" y2="12"></line>
				<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
				<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
			</>
		),
		twitter: (
			<>
				<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
			</>
		),
		user: (
			<>
				<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
				<circle cx="12" cy="7" r="4"></circle>
			</>
		),
		tools: (
			<path d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
		),
		sparkle: (
			<path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
		),
	};

	return svgMap[value];
};
