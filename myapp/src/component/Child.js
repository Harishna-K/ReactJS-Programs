// 

import React, { useContext } from 'react';
import {ThemeContext} from './ThemedComponent'

function ThemedComponent() {
  const theme = useContext(ThemeContext);

  return <div style={{ background: theme.background, color: theme.text }}>Themed Content</div>;
}
export default ThemedComponent