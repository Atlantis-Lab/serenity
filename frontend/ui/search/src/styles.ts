import { css } from '@emotion/react'

export const selectStyles = css`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 12px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
  outline: none;

  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &:hover,
  &.rc-select-focused {
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  &.rc-select-disabled {
    cursor: not-allowed;

    .rc-select-selection {
      opacity: 0.3;
      background-color: #dedede;
    }
  }

  &:hover.rc-select-disabled {
    border: 1px solid rgba(0, 0, 0, 0.08);
  }

  .rc-select-arrow {
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    top: 0px;
    right: 16px;
    @media (min-width: 40em) {
      right: 20px;
    }

    svg {
      cursor: pointer;
    }
  }

  .rc-select-selection {
    outline: none;
    user-select: none;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    .rc-select-selection__rendered {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;

      .rc-select-selection__placeholder {
        position: absolute;
        top: 50%;
        font-weight: 500;
        color: #bebebe;
        cursor: text;
      }

      ul {
        height: 100%;
        width: 100%;
      }
    }
  }

  .rc-select-selection__choice {
    display: flex;
    align-items: center;
    background-color: #f3f3f3;
    border-radius: 4px;
    float: left;
    height: 30px;
    box-sizing: border-box;
    padding: 5px 10px 5px 15px;
    margin-right: 5px;
    margin-top: 5px;
    position: relative;
    overflow: hidden;
    cursor: auto;

    .rc-select-selection__choice__remove {
      margin-left: 10px;

      .rc-select-selection__choice__remove-icon {
        font-style: normal;
        color: #9e9e9e;
        cursor: pointer;
        &:hover {
          color: #000000;
        }
      }
    }
  }

  .rc-select-search {
    width: 100%;
    height: 100%;
    padding: 0;
    display: flex;
    align-items: center;

    .rc-select-search__field {
      border: none;
      background: transparent;
      outline: 0px;
      width: 100%;
      height: 100%;
      padding: 0px;
      font-weight: 500;
      display: inline-block;
    }

    .rc-select-search__field__wrap {
      height: 100%;
      width: 100%;
      padding-top: 10px;
      padding-bottom: 10px;
      box-sizing: border-box;
    }

    .rc-select-search__field__mirror {
      position: absolute;
      top: -999px;
      left: 0;
      white-space: pre;
    }
  }

  .rc-select-selection-selected-value {
    opacity: 1 !important;
    position: absolute;
    top: 50%;
    margin-top: -7.5px;
  }
`

export const selectSizeNormal = css`
  min-height: 58px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.03);

  .rc-select-selection {
    padding-left: 50px;
    padding-right: 24px;
    @media (min-width: 40em) {
      padding-left: 60px;
    },
  }

  .rc-select-selection__placeholder {
    font-size: 13px;
    line-height: 1;
    margin-top: -6.5px;
  }

  .rc-select-search__field {
    font-size: 13px;
  }
`

export const selectSizeLarge = css`
  min-height: 64px;

  .rc-select-selection {
    padding-left: 50px;
    padding-right: 50px;
    @media (min-width: 40em) {
      padding-left: 72px;
    },
  }

  .rc-select-selection__placeholder {
    font-size: 15px;
    line-height: 1;
    margin-top: -7.5px;
  }

  .rc-select-search__field {
    font-size: 15px;
  }
`

export const dropdownStyles = css`
  background-color: white;
  border-radius: 4px;
  box-shadow: 3px 24px 40px 0 rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
  z-index: 100;
  position: absolute;
  outline: none;
  max-height: 150px;
  overflow: scroll;
  cursor: pointer;

  &.rc-select-dropdown-hidden,
  &.rc-select-dropdown-hidden:empty {
    display: none;
  }

  .rc-select-dropdown-menu {
    outline: none;
    margin: 0;
    padding: 0;
    list-style: none;
    z-index: 9999;
    box-sizing: border-box;

    .rc-select-dropdown-menu-item {
      font-family: 'Inter';
      font-weight: 600;
      font-size: 12px;
      padding: 12px 32px;
      color: #000000;
      outline: none;
    }

    .rc-select-dropdown-menu-item.hidden {
      display: none;
    }

    .rc-select-dropdown-menu-item:first-of-type.hidden + .rc-select-dropdown-menu-item {
      padding-top: 19px;
    }

    .rc-select-dropdown-menu-item:last-of-type.hidden + .rc-select-dropdown-menu-item {
      padding-bottom: 19px;
    }

    .rc-select-dropdown-menu-item:first-of-type {
      padding-top: 19px;
    }

    .rc-select-dropdown-menu-item:last-of-type {
      padding-bottom: 19px;
    }

    .rc-select-dropdown-menu-item-active {
      color: #575757;
    }
  }
`
