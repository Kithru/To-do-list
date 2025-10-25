#!/bin/bash
# Initialize MySQL database
service mysql start

# Create Laravel database if not exists
mysql -u root -e "CREATE DATABASE IF NOT EXISTS todolist CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"

# Keep container running with Apache
apache2-foreground
