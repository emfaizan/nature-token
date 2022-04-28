module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '0.85rem',
          sm: '1rem',
          lg: '1.5rem',
          xl: '2rem'
        },
        width: '1620px'
      },
      colors: {
        'natures-vault-green': '#7AFB61',
        'natures-vault-blue': '#00FCFF',
        'linkedin-blue': '#2286EA',
        'grey-section': '#E3E4E9'
      },
      backgroundImage: {
        // 'hero': "url('images/Nature_s Vault - Image Forest(1).jpg')",
        'hero': "url('../src/images/Nature_s Vault - Image Forest(1).jpg')",
        'impact': "url('../src/images/NV - Image Impact-edit.jpeg')",
        'preservation': "url('../src/images/NV - Image Blog 4-edit.jpg')",
        'community': "url('../src/images/Nature_s Vault - Image Girl Wheat Feild.jpg')",
        'transparency': "url('../src/images/Nature_s Vault - Image Boy in Desert-edit.jpg')",
        'mountains': "url('../src/images/Nature_s Vault - Image Mountain Background-edit.jpg')",
        'mountains-small': "url('../src/images/Nature_s Vault - Image Mountain Background-edit2.jpg')"
      }
    },
    fontFamily: {
      // 'sans': ['ui-sans-serif', 'system-ui'],
      'sans': ['Montserrat', 'ui-sans-serif'],
      
      // 'serif': ['ui-serif', 'Georgia'],
      'serif': ['Libre Bodoni', 'ui-serif'],

      // 'mono': ['ui-monospace', 'SFMono-Regular'],
      'mono': ['ui-monospace'],

      // 'display': ['Oswald'],
      // 'body': ['"Open Sans"'],
    },
  },
  plugins: []
}