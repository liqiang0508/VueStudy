#!/usr/bin/python
# coding: UTF-8 -*-
import os  
import time # 引入time模块
import shutil

# print "你好"
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

import xlrd
import xml.dom.minidom as Dom  

xmlfile = 'strings.xls'
workbook = xlrd.open_workbook(xmlfile) #读取excel文件
# print "There are {} sheets in the workbook".format(workbook.nsheets) #获取excel中表单数量
# Langue = ['EN','CH','TH']
# Langue = []
# Langue = workbook.sheets()[0].row(0)[1:]
# print Langue
# print  workbook.sheets()[0].row(0)
data = workbook.sheets()[0].row(0)  #读取第一行有几种语言
Langue=[]
for l in (data):
	if l.value !='':
		pass
		# print  data.index(l),l.value.lower()
	# if l.
		Langue.append(l.value.lower())

Langue = Langue[1:]#去掉第一个ID

# print "after",Langue 
for langue in Langue: #把语言存起来遍历生成xml文件
	# print "\ncurlangue==="+langue+"\n"
	if langue=='':
		break
	
	f = open(langue+".js", "w+")
	f.write(" const "+langue+"= {\n\tmessage:{\n")

	for booksheet in workbook.sheets():#循环每个表单
    		for row in xrange(1,booksheet.nrows):
				if booksheet.cell(row, 0).value!='' and booksheet.cell(row, 0).value.find('STR_')!=-1:
					celldata = booksheet.cell(row, 1+Langue.index(langue)).value
					celldata = str(celldata)
					celldata = celldata.replace('\n','\\n') 
					celldata = celldata.replace('\"','\\"') 
					text = ""
					# if row == booksheet.nrows-1:
					# 	text = "\""+booksheet.cell(row, 0).value+"\":"+"\""+celldata+"\"\n"
					# else:
					text = "\""+booksheet.cell(row, 0).value+"\":"+"\""+celldata+"\",\n"
					f.write(("\t\t"+text))
    				
				else:
					pass
	f.write("\t}\n}\n")
	f.write("export default "+ langue)
	f.close()
 
	src = langue+".js"
	dst = "../src/i18n/local/"+langue+".js"
	shutil.move(src, dst)




print"build success------------------"
os.system("pause")