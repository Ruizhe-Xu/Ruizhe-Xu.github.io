// Edit this file to update your homepage. Save and refresh the preview.
window.ACADEMIC_SITE = {
  person: {
    englishName: 'Ruizhe Xu',
    chineseName: '(徐睿哲)',
    affiliation: 'The University of Hong Kong', // Optional position or institution
    email: 'ruizhexu.math[at]gmail.com',
    biography: [
      'I am currently a Postdoctoral Fellow in the Department of Mathematics at the University of Hong Kong, working with Professor [Zhigang Bao](https://sites.google.com/view/zhigangbaohomepage/).',,
      'My research interests lie in probability theory and mathematical physics, particularly random matrices and random graphs, stochastic homogenization, and random walks in random environments.',
      'I received my B.S. in Mathematics and Applied Mathematics from Zhejiang University in 2021 and my Ph.D. in Probability and Mathematical Statistics from the School of Mathematical Sciences at Zhejiang University in 2026, under the supervision of Professor [Zhonggen Su](https://person.zju.edu.cn/0089282). During my Ph.D., I visited Professor [Jiaoyang Huang](https://jiaoyang.github.io/) at the University of Pennsylvania from 2025 to 2026.',
      'Outside of mathematics, I enjoy playing basketball and Go, working out, and hiking.'
    ],
    photo: 'assets/profile.jpg', // Add your photo here. Missing photo is hidden automatically.
    links: [
      { label: 'CV', url: 'assets/CV.pdf' },
      { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=FJryM-YAAAAJ&hl=en' },
      { label: 'GitHub', url: '' }
    ]
  },
  papers: [
    {
      title: 'Local Law and Eigenvector Delocalization for Random Lifts',
      authors: 'With [Jiaoyang Huang](https://jiaoyang.github.io/)',
      venue: 'Preprint (Oct 2026)',
      image: 'assets/papers/random-lift.webp',
      imageCaption:'The small graph at the lower left is the base graph, while the larger graph illustrates a random lift. Each base vertex is replaced by a collection of vertices, and each base edge by a random matching between the corresponding collections. Colors indicate the correspondence with the base graph. This construction combines a fixed local structure with random connections, providing a natural setting for studying local spectral statistics and eigenvector delocalization.',
      resources: [
        { label: 'arXiv', url: 'https://arxiv.org/abs/2610.37463' },
        { label: 'PDF', url: '' },
        { label: 'Lean', url: '' },
        { label: 'Blueprint', url: '' }
      ]
    },
    {
      title: 'Non-symmetric vector dyson equations',
      authors: 'With [Jiaoyang Huang](https://jiaoyang.github.io/) and [Zhonggen Su](https://person.zju.edu.cn/0089282)',
      venue: 'Preprint (July 2026)',
      image: 'assets/papers/dyson-equation.webp',
      imageCaption:'This schematic illustrates various possible features of the spectral measure associated with the Dyson equation. The blue curve represents its continuous density; purple markers indicate spectral edges, green markers identify cusps where spectral bands meet, and orange annotations highlight points where the density diverges. The red vertical lines represent atoms carrying positive mass. These features capture the different local behaviors that arise when studying the regularity and singularities of solutions to the Dyson equation.',
      resources: [{ label: 'arXiv', url: 'https://arxiv.org/abs/2607.16333' }, { label: 'Lean', url: 'https://github.com/Ruizhe-Xu/Non-symmetric-Dyson-Equations' }]
    },
    {
      title: 'Quantitative Einstein relation for reversible diffusions in a random environment',
      authors: 'With [Ahmed Bou-Rabee](https://nitromannitol.github.io/)',
      venue: 'Preprint (May 2026)',
      image: 'assets/papers/einstein-relation.webp',
      imageCaption:'Sample paths of Brownian motions with drift in a fixed direction, all starting from a common origin marked by the black dot. The drift strength varies continuously from zero in blue to a small positive value in red, illustrating the interplay between random fluctuations and directional motion. The Einstein relation connects the effective diffusion of a system without an external force to the linear response of its average velocity to a weak applied force.',
      resources: [{ label: 'arXiv', url: 'https://arxiv.org/abs/2605.26082' }, { label: 'Lean', url: '' }]
    },
    {
      title: 'Coupling between Brownian motion and random walks on the infinite percolation cluster',
      authors: 'With [Chenlin Gu](https://chenlin-gu.github.io/) and [Zhonggen Su](https://person.zju.edu.cn/0089282)',
      venue: 'Probability Theory and Related Fields 196, 443–485 (2026)',
      image: 'assets/papers/strong-approximation.webp',
      imageCaption:'The gray network represents a two-dimensional supercritical percolation cluster. The blue trajectory is a random walk along its open edges, while the red trajectory is a coupled Brownian motion. Their closeness on macroscopic scales illustrates the idea of strong approximation: constructing both processes on a common probability space and controlling their pathwise discrepancy over an entire time interval.',
      resources: [{ label: 'Journal', url: 'https://link.springer.com/article/10.1007/s00440-025-01403-7' }, { label: 'Lean', url: '' }]
    },
  ]
};
