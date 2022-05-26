-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Май 26 2022 г., 12:08
-- Версия сервера: 8.0.24
-- Версия PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `cg`
--

-- --------------------------------------------------------

--
-- Структура таблицы `data`
--

CREATE TABLE `data` (
  `id` int NOT NULL,
  `school` varchar(300) CHARACTER SET utf8 COLLATE utf8_danish_ci NOT NULL,
  `fio` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `day` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `time` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `adress` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `fioDir` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `phone` varchar(300) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `was` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `data`
--

INSERT INTO `data` (`id`, `school`, `fio`, `day`, `time`, `adress`, `fioDir`, `phone`, `email`, `was`) VALUES
(1, 'СОШ № 2', 'Бостанова Л.К.', '2021-11-30', '17:00', '369000, КЧР, г.Черкесск,  ул.Кавказская, 17', 'Аслануков Тимур Мухамедович', '8(8782)26-17-79', 'moysosh2@mail.ru', 0),
(2, 'СОШ № 3', 'Гочияева М.Д.', '2021-10-20', '18:00', '369000,  КЧР, г.Черкесск,  ул.Балахонова, 73', 'Гурина Светлана Валентиновна', '88782265641', 'MOUSchool3kchr@mail.ru', 0),
(3, 'СОШ № 4', 'БорлаковаМ.А.', '2021-12-17', '17:30', '369000, КЧР, г.Черкесскул.Ставропольская, 107', 'ДолаеваМадина Магометовна', '8(8782)27-96-03', 'cdtn_999@mail.ru ', 1),
(4, 'Гимназия № 5', 'Кунижева Л.А.', '2021-11-17', '17:30', '369000,КЧР,  г.Черкесск,  ул.Ленина, 66', 'Чащев Сергей Вячеславович', '8 (8782) 25-52-00', 'gimn5_2007@mail.ru', 0),
(5, 'СОШ № 6', 'Бостанова Л.К.', '2021-12-10', '18:00', '369000,КЧР,  г.Черкесск,  ул.Кавказская,58', 'Клименко Галина Васильевна', '8(8782)28-10-74', 'school6_09@bk.ru', 1),
(6, 'СОШ № 7', 'Шавтикова Л.М.', '2021-11-22', '18:00', '369000, КЧР, г.Черкесск,  ул.Доватора, 17', 'Копсергенов Шамель Зедович', '8 (8782)27-95-00', 'shkola_777@mail.ru', 0),
(7, 'СОШ № 8', 'Кунижева Л.А.', '2021-11-22', '17:30', '369000,КЧР,  г.Черкесск,  ул.Тургеневская, 75', 'Гогов Азамат Джамолович', '8(8782)27-94-44', 'school_8_09@mail.ru', 0),
(8, 'Гимназия № 9', 'Бостанова Л.К.', '2021-11-22', '17:30', '369000,КЧР,  г.Черкесск,  ул.Тургеневская, 75', 'Гогов АзаматДжамолович', '8(8782)27-94-44', 'school_8_09@mail.ru', 0),
(9, 'СОШ № 10', 'Селимсултанова Р.И.', '2021-11-22', '17:00', '369000,КЧР,  г.Черкесск, ул.Крупской, 26', 'Зоя Якубовна Дышекова', '+7(878) 221-08-92.', 'zoya@mail.ru', 1),
(10, 'Центр образования № 11', 'Узденов А.А.', '2021-11-12', '17:00', '369000, КЧР, г.Черкесск, ул.Кочубея, 28', 'Ляшова Елена Владимировна', '8(8782)27-94-86', 'mousosh1151@mail.ru', 0);

-- --------------------------------------------------------

--
-- Структура таблицы `employees`
--

CREATE TABLE `employees` (
  `id` int NOT NULL,
  `fio` varchar(300) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `employees`
--

INSERT INTO `employees` (`id`, `fio`) VALUES
(1, 'Бостанова Л.К.'),
(2, 'Гочияева М.Д.'),
(3, 'Борлакова А.Х.'),
(4, 'Кунижева Л.А.'),
(5, 'Шавтикова Л.М.'),
(6, 'Кунижева Л.А.'),
(7, 'Эркенова А.А.'),
(8, 'Селимсултанова Р.И.'),
(9, 'Узденов А.А.'),
(10, 'Морозова Н.В.');

-- --------------------------------------------------------

--
-- Структура таблицы `schools`
--

CREATE TABLE `schools` (
  `id` int NOT NULL,
  `school` varchar(300) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `schools`
--

INSERT INTO `schools` (`id`, `school`) VALUES
(1, 'СОШ № 2'),
(2, 'СОШ № 3'),
(3, 'СОШ № 4'),
(4, 'Гимназия № 5'),
(5, 'СОШ № 6'),
(6, 'СОШ № 7'),
(7, 'СОШ № 8'),
(8, 'Гимназия № 9'),
(9, 'СОШ № 10'),
(10, 'Центр образования № 11');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `data`
--
ALTER TABLE `data`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `schools`
--
ALTER TABLE `schools`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `data`
--
ALTER TABLE `data`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблицы `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблицы `schools`
--
ALTER TABLE `schools`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
