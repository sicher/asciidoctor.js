data = <<EOS
include::README.adoc[]
EOS

require 'native'
$global.addEventListener 'DOMContentLoaded', proc {
  base_dir = File.dirname $global.window.location.href
  ENV['HOME'] = base_dir
  timings = Asciidoctor::Timings.new
  html = Asciidoctor.convert data, :safe => :safe, :backend => "defold", :attributes => %w(showtitle icons! toc! sectanchors imagesdir=images), :timings => timings
  timings.print_report
  $global.document.getElementById('content').innerHTML = html
}, false
