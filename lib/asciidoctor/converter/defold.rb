module Asciidoctor
  class Converter::DefoldConverter < Converter::Base
    def convert node, template_name = nil, opts = {}
      Defold.render(node)
    end
  end
end  