import { css } from '@emotion/react'

export const selectStyles = css`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 12px;
  min-height: 50px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
  outline: none;
  cursor: pointer;

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
    right: 20px;
  }

  &:hover .rc-select-arrow rect,
  &.rc-select-focused .rc-select-arrow rect {
    fill: #000000;
  }

  .rc-select-selection {
    outline: none;
    user-select: none;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 40px 5px 20px;

    .rc-select-selection__rendered {
      display: flex;
      align-items: center;

      .rc-select-selection__placeholder {
        position: absolute;
        top: 50%;
        margin-top: -7.5px;
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
    position: static;
    float: left;
    width: auto;
    max-width: 100%;
    padding: 0;
    margin-top: 5px;
    height: 30px;
    display: flex;
    align-items: center;

    .rc-select-search__field {
      border: none;
      font-size: 16px;
      background: transparent;
      outline: 0px;
      width: 2px;
      padding: 0px;
      cursor: pointer;
      display: inline-block;
      @media (max-width: 640px) {
        display: none;
      }
    }
  }

  .rc-select-selection-selected-value {
    opacity: 1 !important;
    position: absolute;
    top: 50%;
    margin-top: -7.5px;
  }
`

export const selectRoundedStyles = css`
  min-height: 40px;
  border-radius: 20px;
  color: #999999;

  &.rc-select-disabled {
    background-color: transparent;

    .rc-select-selection {
      opacity: 0.5;
      background-color: transparent;
    }
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
      padding: 9px 20px;
      color: #999999;
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
      color: #bebebe;
    }
  }
`
