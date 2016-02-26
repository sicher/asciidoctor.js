class Defold
  def self.render(node)
    backend = node.document.attributes['backend'] || ''
    templatedir = node.document.attributes['template_dir'] || ''
    node_name = node.node_name || ''
    %x(
    var template = Opal.File.$read("./lib/jade/"+#{backend}+"/"+#{node_name}+".jade");
    var compiled = jade.compile(template, {pretty: true});
    return compiled({ node: #{node} });
    )
  end
end