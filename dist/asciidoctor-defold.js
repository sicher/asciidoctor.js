/* Generated by Opal 0.9.2 */
(function(Opal) {
  Opal.dynamic_require_severity = "ignore";
  var OPAL_CONFIG = { method_missing: true, arity_check: false, freezing: true, tainting: true };
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $module = Opal.module, $klass = Opal.klass, $hash2 = Opal.hash2;

  Opal.add_stubs(['$render']);
  return (function($base) {
    var $Asciidoctor, self = $Asciidoctor = $module($base, 'Asciidoctor');

    var def = self.$$proto, $scope = self.$$scope;

    (function($base, $super) {
      function $DefoldConverter(){};
      var self = $DefoldConverter = $klass($base, $super, 'DefoldConverter', $DefoldConverter);

      var def = self.$$proto, $scope = self.$$scope;

      return (Opal.defn(self, '$convert', function(node, template_name, opts) {
        var self = this;

        if (template_name == null) {
          template_name = nil
        }
        if (opts == null) {
          opts = $hash2([], {})
        }
        return $scope.get('Defold').$render(node);
      }), nil) && 'convert'
    })($scope.get('Converter'), (($scope.get('Converter')).$$scope.get('Base')))
  })($scope.base)
})(Opal);

/* Generated by Opal 0.9.2 */
(function(Opal) {
  Opal.dynamic_require_severity = "ignore";
  var OPAL_CONFIG = { method_missing: true, arity_check: false, freezing: true, tainting: true };
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  return nil
})(Opal);
