import styled, { css } from 'styled-components';
import {
  TOKEN_COLOR_BASE_CYAN_NORMAL,
  TOKEN_COLOR_BACKGROUND_BUTTON_PRIMARY_BASE,
  TOKEN_COLOR_BACKGROUND_BUTTON_PRIMARY_ACTIVE,
  TOKEN_COLOR_BACKGROUND_BUTTON_SECONDARY_BASE,
  TOKEN_COLOR_FONT_BUTTON_PRIMARY_BASE,
  TOKEN_COLOR_FONT_BUTTON_SECONDARY_BASE,
  TOKEN_COLOR_FONT_BUTTON_SECONDARY_ACTIVE,
  TOKEN_FONT_FAMILY_BASE
} from '@eltongarbin/tokens/dist/web/tokens';

const Button = styled.button`
  border-radius: 3px;
  font-weight: 600;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  user-select: none;
  cursor: pointer;
  border: none;
  min-height: 1em;
  vertical-align: middle;
  outline: none;
  transition: background-color 150ms ease;
  padding: 0.78571429em 1.5em 0.78571429em;
  font-family: ${TOKEN_FONT_FAMILY_BASE};

  ${(props) =>
    props.color === 'primary' &&
    css`
      background-color: ${TOKEN_COLOR_BACKGROUND_BUTTON_PRIMARY_BASE};
      color: ${TOKEN_COLOR_FONT_BUTTON_PRIMARY_BASE};
      box-shadow: inset 0 -2px 0 0 rgba(54, 65, 81, 0.2);

      :hover,
      :active {
        background-color: ${TOKEN_COLOR_BACKGROUND_BUTTON_PRIMARY_ACTIVE};
        box-shadow: inset 0 2px 0 0 rgba(54, 65, 81, 0.2);
      }
    `}

  ${(props) =>
    props.color === 'secondary' &&
    css`
      background: ${TOKEN_COLOR_BACKGROUND_BUTTON_SECONDARY_BASE};
      color: ${TOKEN_COLOR_FONT_BUTTON_SECONDARY_BASE};
      border: 2px ${TOKEN_COLOR_BASE_CYAN_NORMAL} solid;

      :hover {
        color: ${TOKEN_COLOR_FONT_BUTTON_SECONDARY_ACTIVE};
      }
    `}
`;

export default Button;
