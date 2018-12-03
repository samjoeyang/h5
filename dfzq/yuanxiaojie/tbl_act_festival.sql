/*
 Navicat Premium Data Transfer

 Source Server         : omnies
 Source Server Type    : MySQL
 Source Server Version : 50542
 Source Host           : 121.40.204.104
 Source Database       : dfzq

 Target Server Type    : MySQL
 Target Server Version : 50542
 File Encoding         : utf-8

 Date: 02/10/2017 09:48:36 AM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_act_festival`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_act_festival`;
CREATE TABLE `tbl_act_festival` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `nickname` varchar(80) NOT NULL,
  `mobile` varchar(20) NOT NULL,
  `createtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` tinyint(3) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

SET FOREIGN_KEY_CHECKS = 1;
