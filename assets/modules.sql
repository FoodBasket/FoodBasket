-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 12, 2020 at 05:15 PM
-- Server version: 10.1.39-MariaDB
-- PHP Version: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `deltasalescrm_tk_paras_8fcum`
--

-- --------------------------------------------------------

--
-- Table structure for table `modules`
--

CREATE TABLE `modules` (
  `id` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '1=enable,2=disable',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `modules`
--

INSERT INTO `modules` (`id`, `name`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Leads', 1, NULL, NULL),
(2, 'Contacts', 1, NULL, NULL),
(3, 'Companies', 1, NULL, NULL),
(4, 'Followups', 1, NULL, NULL),
(5, 'UploadDocuments', 1, NULL, NULL),
(6, 'Activities', 1, NULL, NULL),
(7, 'Reminders', 1, NULL, NULL),
(8, 'Pipelines', 1, NULL, NULL),
(9, 'PipelineView', 1, NULL, NULL),
(10, 'Notifications', 1, NULL, NULL),
(11, 'Permission', 1, NULL, NULL),
(12, 'Priority', 1, NULL, NULL),
(13, 'EmailIntegration', 1, NULL, NULL),
(14, 'Custom', 1, NULL, NULL),
(15, 'Analytics', 1, NULL, NULL),
(16, 'Invoices', 1, NULL, NULL),
(17, 'Payment', 1, NULL, NULL),
(18, 'WebForms', 1, NULL, NULL),
(19, 'Products', 1, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `modules`
--
ALTER TABLE `modules`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `modules`
--
ALTER TABLE `modules`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
