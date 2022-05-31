//载入webpack主体
const webpack = require("../lib/webpack");
//指定webpack配置文件
const config = require("./webpack.config");

//执行webpack，返回一个compile的对象，这个时候编译并未执行
const compiler = webpack(config);
//运行compile，执行编译
compiler.run();
