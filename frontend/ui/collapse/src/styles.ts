import { css } from '@emotion/react'

export const collapseStyles = css`
  background-color: #ffffff;
  border-radius: 3px;
  width: 100%;
  font-family: Inter;
  word-break: break-word;
  outline: none;

  .rc-collapse-anim-active {
    transition: height 0.2s ease-out;
  }

  & > .rc-collapse-item {
    border-top: 1px solid #d9d9d9;
  }

  & > .rc-collapse-item:first-of-type {
    border-top: none;
  }

  & > .rc-collapse-item > .rc-collapse-header {
    display: flex;
    position: relative;
    line-height: 24px;
    font-size: 15px;
    font-weight: 500;
    padding: 16px 56px 16px 24px;
    color: #666;
    outline: none;
    cursor: pointer;

    .arrow {
      display: flex;
      position: absolute;
      vertical-align: middle;
      right: 24px;
      top: 20px;
    }

    .rc-collapse-extra {
      padding-top: 4px;
      margin-right: 12px;
      line-height: normal;
    }
  }

  & > .rc-collapse-item-active > .rc-collapse-header {
    color: #000;
  }

  & > .rc-collapse-item-disabled > .rc-collapse-header {
    cursor: not-allowed;
    color: #999;
  }

  .rc-collapse-content {
    overflow: hidden;
    color: #666;
    box-sizing: border-box;

    & > .rc-collapse-content-box {
      font-size: 13px;
      line-height: 20px;
      padding: 6px 24px;
    }

    & > .rc-collapse-content-box:first-of-type {
      padding-top: 0px;
    }

    & > .rc-collapse-content-box:last-of-type {
      padding-bottom: 16px;
    }
  }

  .rc-collapse-content-inactive {
    display: none;
  }
`
