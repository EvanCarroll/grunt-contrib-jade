this["JST"] = this["JST"] || {};

this["JST"]["jade"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var locals_ = (locals || {}),test = locals_.test;buf.push("<div id=\"test\" class=\"test\"><span id=\"data\">data</span>");
if ( test)
{
buf.push("<div>testing</div>");
}
buf.push("</div>");;return buf.join("");
};