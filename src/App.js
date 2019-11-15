import React  from 'react';
import { Router, Link } from "@reach/router";
import ComponentStylesWithSCSSAndBEM from './approaches/component_styles_with_scss_and_bem/ComponentStylesWithSCSSAndBEM';
import InlineStyles from './approaches/inline_styles/InlineStyles';
import MixUpWithYourFavouriteCSSFramework from './approaches/mix_up_with_your_favourite_css_framework/MixUpWithYourFavouriteCSSFramework';
import StyledComponents from './approaches/styled_components/StyledComponents';

const App = () => (
  <div style={{ padding: '4rem' }}>
    <h1>Different approaches to style your React components</h1>
    <ul>
      <li>
        <Link to="/inline_styles">Inline styles</Link>
      </li>
      <li>
        <Link to="/styled_components">Styled components</Link>
      </li>
      <li>
        <Link to="/component_styles_with_scss_and_bem">Component styles with SCSS and BEM</Link>
      </li>
      <li>
        <Link to="/mix_up_with_your_favourite_css_framework">Mix up with your favourite CSS framework</Link>
      </li>
    </ul>
    <Router>
      <ComponentStylesWithSCSSAndBEM path="/component_styles_with_scss_and_bem" />
      <InlineStyles path="/inline_styles" />
      <MixUpWithYourFavouriteCSSFramework path="/mix_up_with_your_favourite_css_framework" />
      <StyledComponents path="/styled_components" />
    </Router>
  </div>
);

export default App;
