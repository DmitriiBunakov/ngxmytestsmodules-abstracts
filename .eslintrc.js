module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
	],
	// Парсер для ts. Нужно установить зависимость "@typescript-eslint/parser"
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module',
	},
	'plugins': [
		// Плагин для ts. Нужно установить зависимость "@typescript-eslint/eslint-plugin"
		'@typescript-eslint',
	],
	'rules': {
		// https://eslint.org/docs/latest/rules/array-callback-return
		'array-callback-return': [1],
		// https://eslint.org/docs/latest/rules/constructor-super
		'constructor-super': [2],
		// https://eslint.org/docs/latest/rules/for-direction
		'for-direction': [0],
		// https://eslint.org/docs/latest/rules/getter-return
		'getter-return': [0],
		// https://eslint.org/docs/latest/rules/no-async-promise-executor
		'no-async-promise-executor': [1],
		// https://eslint.org/docs/latest/rules/no-await-in-loop
		'no-await-in-loop': [1],
		// https://eslint.org/docs/latest/rules/no-class-assign
		'no-class-assign': [2],
		// https://eslint.org/docs/latest/rules/no-compare-neg-zero
		'no-compare-neg-zero': [1],
		// https://eslint.org/docs/latest/rules/no-cond-assign
		'no-cond-assign': [2],
		// https://eslint.org/docs/latest/rules/no-const-assign
		'no-const-assign': [2],
		// https://eslint.org/docs/latest/rules/no-constant-binary-expression
		'no-constant-binary-expression': [1],
		// https://eslint.org/docs/latest/rules/no-constant-condition
		'no-constant-condition': [1],
		// https://eslint.org/docs/latest/rules/no-constructor-return
		'no-constructor-return': [1],
		// https://eslint.org/docs/latest/rules/no-control-regex
		'no-control-regex': [1],
		// https://eslint.org/docs/latest/rules/no-debugger
		'no-debugger': [1],
		// https://eslint.org/docs/latest/rules/no-dupe-args
		'no-dupe-args': [1],
		// https://eslint.org/docs/latest/rules/no-dupe-class-members
		'no-dupe-class-members': [1],
		// https://eslint.org/docs/latest/rules/no-dupe-else-if
		'no-dupe-else-if': [1],
		// https://eslint.org/docs/latest/rules/no-dupe-keys
		'no-dupe-keys': [1],
		// https://eslint.org/docs/latest/rules/no-duplicate-case
		'no-duplicate-case': [1],
		// https://eslint.org/docs/latest/rules/no-duplicate-imports
		'no-duplicate-imports': [1],
		// https://eslint.org/docs/latest/rules/no-empty-character-class
		'no-empty-character-class': [1],
		// https://eslint.org/docs/latest/rules/no-empty-pattern
		'no-empty-pattern': [1],
		// https://eslint.org/docs/latest/rules/no-ex-assign
		'no-ex-assign': [1],
		// https://eslint.org/docs/latest/rules/no-fallthrough
		'no-fallthrough': [1],
		// https://eslint.org/docs/latest/rules/no-func-assign
		'no-func-assign': [1],
		// https://eslint.org/docs/latest/rules/no-import-assign
		'no-import-assign': [1],
		// https://eslint.org/docs/latest/rules/no-inner-declarations
		'no-inner-declarations': [1],
		// https://eslint.org/docs/latest/rules/no-invalid-regexp
		'no-invalid-regexp': [1],
		// https://eslint.org/docs/latest/rules/no-irregular-whitespace
		'no-irregular-whitespace': [
			1,
			{
				skipStrings: true,
			},
		],
		// https://eslint.org/docs/latest/rules/no-loss-of-precision
		'no-loss-of-precision': [1],
		// https://eslint.org/docs/latest/rules/no-misleading-character-class
		'no-misleading-character-class': [1],
		// https://eslint.org/docs/latest/rules/no-new-symbol
		'no-new-symbol': [2],
		// https://eslint.org/docs/latest/rules/no-obj-calls
		'no-obj-calls': [2],
		// https://eslint.org/docs/latest/rules/no-promise-executor-return
		'no-promise-executor-return': [0],
		// https://eslint.org/docs/latest/rules/no-prototype-builtins
		'no-prototype-builtins': [1],
		// https://eslint.org/docs/latest/rules/no-self-assign
		'no-self-assign': [1],
		// https://eslint.org/docs/latest/rules/no-self-compare
		'no-self-compare': [1],
		// https://eslint.org/docs/latest/rules/no-setter-return
		'no-setter-return': [1],
		// https://eslint.org/docs/latest/rules/no-sparse-arrays
		'no-sparse-arrays': [1],
		// https://eslint.org/docs/latest/rules/no-template-curly-in-string
		'no-template-curly-in-string': [1],
		// https://eslint.org/docs/latest/rules/no-this-before-super
		'no-this-before-super': [1],
		// https://eslint.org/docs/latest/rules/no-undef
		'no-undef': [0],
		// https://eslint.org/docs/latest/rules/no-unexpected-multiline
		'no-unexpected-multiline': [1],
		// https://eslint.org/docs/latest/rules/no-unmodified-loop-condition
		'no-unmodified-loop-condition': [1],
		// https://eslint.org/docs/latest/rules/no-unreachable
		'no-unreachable': [1],
		// https://eslint.org/docs/latest/rules/no-unreachable-loop
		'no-unreachable-loop': [1],
		// https://eslint.org/docs/latest/rules/no-unsafe-finally
		'no-unsafe-finally': [1],
		// https://eslint.org/docs/latest/rules/no-unsafe-negation
		'no-unsafe-negation': [1],
		// https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining
		'no-unsafe-optional-chaining': [
			1,
			{
				disallowArithmeticOperators: true,
			},
		],
		// https://eslint.org/docs/latest/rules/no-unused-private-class-members
		'no-unused-private-class-members': [1],
		// https://eslint.org/docs/latest/rules/no-unused-vars
		'no-unused-vars': [0],
		// https://eslint.org/docs/latest/rules/no-use-before-define
		'no-use-before-define': [1],
		// https://eslint.org/docs/latest/rules/no-useless-backreference
		'no-useless-backreference': [1],
		// https://eslint.org/docs/latest/rules/require-atomic-updates
		'require-atomic-updates': [1],
		// https://eslint.org/docs/latest/rules/use-isnan
		'use-isnan': [1],
		// https://eslint.org/docs/latest/rules/valid-typeof
		'valid-typeof': [1],

		// https://eslint.org/docs/latest/rules/accessor-pairs
		'accessor-pairs': [
			1,
			{
				enforceForClassMembers: true,
				getWithoutSet: false,
				setWithoutGet: true,
			},
		],
		// https://eslint.org/docs/latest/rules/arrow-body-style
		'arrow-body-style': [
			1,
			'as-needed',
			{
				requireReturnForObjectLiteral: false,
			},
		],
		// https://eslint.org/docs/latest/rules/block-scoped-var
		'block-scoped-var': [1],
		// https://eslint.org/docs/latest/rules/camelcase
		'camelcase': [
			1,
			{
				properties: 'always',
			},
		],
		// https://eslint.org/docs/latest/rules/capitalized-comments
		'capitalized-comments': [0],
		// https://eslint.org/docs/latest/rules/class-methods-use-this
		'class-methods-use-this': [0],
		// https://eslint.org/docs/latest/rules/complexity
		'complexity': [0, 3],
		// https://eslint.org/docs/latest/rules/consistent-return
		'consistent-return': [0],
		// https://eslint.org/docs/latest/rules/consistent-this
		'consistent-this': [1],
		// https://eslint.org/docs/latest/rules/curly
		'curly': [
			1,
			'multi-line',
			'consistent',
		],
		// https://eslint.org/docs/latest/rules/default-case
		'default-case': [1],
		// https://eslint.org/docs/latest/rules/default-case-last
		'default-case-last': [1],
		// https://eslint.org/docs/latest/rules/default-param-last
		'default-param-last': [1],
		// https://eslint.org/docs/latest/rules/dot-notation
		'dot-notation': [0],
		// https://eslint.org/docs/latest/rules/eqeqeq
		'eqeqeq': [1],
		// https://eslint.org/docs/latest/rules/func-name-matching
		'func-name-matching': [1],
		// https://eslint.org/docs/latest/rules/func-names
		'func-names': [1, 'as-needed'],
		// https://eslint.org/docs/latest/rules/func-style
		'func-style': [
			0,
			'declaration',
			{
				allowArrowFunctions: true,
			},
		],
		// https://eslint.org/docs/latest/rules/grouped-accessor-pairs
		'grouped-accessor-pairs': [1, 'getBeforeSet'],
		// https://eslint.org/docs/latest/rules/guard-for-in
		'guard-for-in': [0],
		// https://eslint.org/docs/latest/rules/id-denylist
		'id-denylist': [1],
		// https://eslint.org/docs/latest/rules/id-length
		'id-length': [
			1,
			{
				max: 30,
				min: 1,
			},
		],
		// https://eslint.org/docs/latest/rules/id-match
		'id-match': [1],
		// https://eslint.org/docs/latest/rules/init-declarations
		'init-declarations': [1],
		// https://eslint.org/docs/latest/rules/max-classes-per-file
		'max-classes-per-file': [
			1,
			{
				ignoreExpressions: true,
				max: 2,
			},
		],
		// https://eslint.org/docs/latest/rules/max-depth
		'max-depth': [
			1,
			{
				max: 4,
			},
		],
		// https://eslint.org/docs/latest/rules/max-lines
		'max-lines': [
			1,
			{
				max: 1000,
				skipBlankLines: true,
				skipComments: true,
			},
		],
		// https://eslint.org/docs/latest/rules/max-lines-per-function
		'max-lines-per-function': [
			1,
			{
				IIFEs: true,
				max: 30,
				skipBlankLines: true,
				skipComments: true,
			},
		],
		// https://eslint.org/docs/latest/rules/max-nested-callbacks
		'max-nested-callbacks': [1, 3],
		// https://eslint.org/docs/latest/rules/max-params
		'max-params': [0],
		// https://eslint.org/docs/latest/rules/max-statements
		'max-statements': [0],
		// https://eslint.org/docs/latest/rules/multiline-comment-style
		'multiline-comment-style': [0, 'bare-block'],
		// https://eslint.org/docs/latest/rules/new-cap
		'new-cap': [0],
		// https://eslint.org/docs/latest/rules/no-alert
		'no-alert': [1],
		// https://eslint.org/docs/latest/rules/no-array-constructor
		'no-array-constructor': [1],
		// https://eslint.org/docs/latest/rules/no-bitwise
		'no-bitwise': [0],
		// https://eslint.org/docs/latest/rules/no-caller
		'no-caller': [0],
		// https://eslint.org/docs/latest/rules/no-case-declarations
		'no-case-declarations': [1],
		// https://eslint.org/docs/latest/rules/no-confusing-arrow
		'no-confusing-arrow': [0],
		// https://eslint.org/docs/latest/rules/no-console
		'no-console': [0],
		// https://eslint.org/docs/latest/rules/no-continue
		'no-continue': [0],
		// https://eslint.org/docs/latest/rules/no-delete-var
		'no-delete-var': [1],
		// https://eslint.org/docs/latest/rules/no-div-regex
		'no-div-regex': [0],
		// https://eslint.org/docs/latest/rules/no-else-return
		'no-else-return': [1],
		// https://eslint.org/docs/latest/rules/no-empty
		'no-empty': [1],
		// https://eslint.org/docs/latest/rules/no-empty-function
		'no-empty-function': [0],
		// https://eslint.org/docs/latest/rules/no-eq-null
		'no-eq-null': [1],
		// https://eslint.org/docs/latest/rules/no-eval
		'no-eval': [1],
		// https://eslint.org/docs/latest/rules/no-extend-native
		'no-extend-native': [
			1,
			{
				exceptions: [],
			},
		],
		// https://eslint.org/docs/latest/rules/no-extra-bind
		'no-extra-bind': [1],
		// https://eslint.org/docs/latest/rules/no-extra-boolean-cast
		'no-extra-boolean-cast': [1],
		// https://eslint.org/docs/latest/rules/no-extra-label
		'no-extra-label': [1],
		// https://eslint.org/docs/latest/rules/no-extra-semi
		'no-extra-semi': [1],
		// https://eslint.org/docs/latest/rules/no-floating-decimal
		'no-floating-decimal': [1],
		// https://eslint.org/docs/latest/rules/no-global-assign
		'no-global-assign': [1],
		// https://eslint.org/docs/latest/rules/no-implicit-coercion
		'no-implicit-coercion': [
			1,
			{
				allow: ['!!'],
				boolean: true,
				disallowTemplateShorthand: true,
				number: true,
				string: true,
			},
		],
		// https://eslint.org/docs/latest/rules/no-implicit-globals
		'no-implicit-globals': [1],
		// https://eslint.org/docs/latest/rules/no-implied-eval
		'no-implied-eval': [1],
		// https://eslint.org/docs/latest/rules/no-inline-comments
		'no-inline-comments': [1],
		// https://eslint.org/docs/latest/rules/no-invalid-this     Работает только с parserOptions MODULE
		'no-invalid-this': [1],
		// https://eslint.org/docs/latest/rules/no-iterator
		'no-iterator': [1],
		// https://eslint.org/docs/latest/rules/no-label-var
		'no-label-var': [0],
		// https://eslint.org/docs/latest/rules/no-lone-blocks
		'no-lone-blocks': [1],
		// https://eslint.org/docs/latest/rules/no-lonely-if
		'no-lonely-if': [1],
		// https://eslint.org/docs/latest/rules/no-loop-func
		'no-loop-func': [1],
		// https://eslint.org/docs/latest/rules/no-magic-numbers
		'no-magic-numbers': [0],
		// https://eslint.org/docs/latest/rules/no-mixed-operators
		'no-mixed-operators': [0],
		// https://eslint.org/docs/latest/rules/no-multi-assign
		'no-multi-assign': [1],
		// https://eslint.org/docs/latest/rules/no-multi-str
		'no-multi-str': [1],
		// https://eslint.org/docs/latest/rules/no-negated-condition
		'no-negated-condition': [1],
		// https://eslint.org/docs/latest/rules/no-nested-ternary
		'no-nested-ternary': [1],
		// https://eslint.org/docs/latest/rules/no-new
		'no-new': [1],
		// https://eslint.org/docs/latest/rules/no-new-func
		'no-new-func': [1],
		// https://eslint.org/docs/latest/rules/no-new-object
		'no-new-object': [1],
		// https://eslint.org/docs/latest/rules/no-new-wrappers
		'no-new-wrappers': [1],
		// https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape
		'no-nonoctal-decimal-escape': [1],
		// https://eslint.org/docs/latest/rules/no-octal
		'no-octal': [1],
		// https://eslint.org/docs/latest/rules/no-octal-escape
		'no-octal-escape': [1],
		// https://eslint.org/docs/latest/rules/no-param-reassign
		'no-param-reassign': [1],
		// https://eslint.org/docs/latest/rules/no-plusplus
		'no-plusplus': [0],
		// https://eslint.org/docs/latest/rules/no-proto
		'no-proto': [1],
		// https://eslint.org/docs/latest/rules/no-redeclare
		'no-redeclare': [1],
		// https://eslint.org/docs/latest/rules/no-regex-spaces
		'no-regex-spaces': [1],
		// https://eslint.org/docs/latest/rules/no-restricted-exports
		'no-restricted-exports': [1],
		// https://eslint.org/docs/latest/rules/no-restricted-globals
		'no-restricted-globals': [1],
		// https://eslint.org/docs/latest/rules/no-restricted-imports
		'no-restricted-imports': [1],
		// https://eslint.org/docs/latest/rules/no-restricted-properties
		'no-restricted-properties': [1],
		// https://eslint.org/docs/latest/rules/no-restricted-syntax
		'no-restricted-syntax': [1],
		// https://eslint.org/docs/latest/rules/no-return-assign
		'no-return-assign': [1],
		// https://eslint.org/docs/latest/rules/no-return-await
		'no-return-await': [1],
		// https://eslint.org/docs/latest/rules/no-script-url
		'no-script-url': [1],
		// https://eslint.org/docs/latest/rules/no-sequences
		'no-sequences': [1],
		// https://eslint.org/docs/latest/rules/no-shadow
		'no-shadow': [1],
		// https://eslint.org/docs/latest/rules/no-shadow-restricted-names
		'no-shadow-restricted-names': [1],
		// https://eslint.org/docs/latest/rules/no-ternary
		'no-ternary': [0],
		// https://eslint.org/docs/latest/rules/no-throw-literal
		'no-throw-literal': [1],
		// https://eslint.org/docs/latest/rules/no-undef-init
		'no-undef-init': [1],
		// https://eslint.org/docs/latest/rules/no-undefined
		'no-undefined': [0],
		// https://eslint.org/docs/latest/rules/no-underscore-dangle
		'no-underscore-dangle': [0],
		// https://eslint.org/docs/latest/rules/no-unneeded-ternary
		'no-unneeded-ternary': [1],
		// https://eslint.org/docs/latest/rules/no-unused-expressions
		'no-unused-expressions': [0],
		// https://eslint.org/docs/latest/rules/no-unused-labels
		'no-unused-labels': [1],
		// https://eslint.org/docs/latest/rules/no-useless-call
		'no-useless-call': [1],
		// https://eslint.org/docs/latest/rules/no-useless-catch
		'no-useless-catch': [1],
		// https://eslint.org/docs/latest/rules/no-useless-computed-key
		'no-useless-computed-key': [1],
		// https://eslint.org/docs/latest/rules/no-useless-concat
		'no-useless-concat': [1],
		// https://eslint.org/docs/latest/rules/no-useless-constructor
		'no-useless-constructor': [0],
		// https://eslint.org/docs/latest/rules/no-useless-escape
		'no-useless-escape': [1],
		// https://eslint.org/docs/latest/rules/no-useless-rename
		'no-useless-rename': [0],
		// https://eslint.org/docs/latest/rules/no-useless-return
		'no-useless-return': [1],
		// https://eslint.org/docs/latest/rules/no-var
		'no-var': [1],
		// https://eslint.org/docs/latest/rules/no-void
		'no-void': [0],
		// https://eslint.org/docs/latest/rules/no-warning-comments
		'no-warning-comments': [1],
		// https://eslint.org/docs/latest/rules/no-with
		'no-with': [1],
		// https://eslint.org/docs/latest/rules/object-shorthand
		'object-shorthand': [1],
		// https://eslint.org/docs/latest/rules/one-var
		'one-var': [0],
		// https://eslint.org/docs/latest/rules/one-var-declaration-per-line
		'one-var-declaration-per-line': [0],
		// https://eslint.org/docs/latest/rules/operator-assignment
		'operator-assignment': [1],
		// https://eslint.org/docs/latest/rules/prefer-arrow-callback
		'prefer-arrow-callback': [0],
		// https://eslint.org/docs/latest/rules/prefer-const
		'prefer-const': [1],
		// https://eslint.org/docs/latest/rules/prefer-destructuring
		'prefer-destructuring': [1],
		// https://eslint.org/docs/latest/rules/prefer-exponentiation-operator
		'prefer-exponentiation-operator': [1],
		// https://eslint.org/docs/latest/rules/prefer-named-capture-group
		'prefer-named-capture-group': [1],
		// https://eslint.org/docs/latest/rules/prefer-numeric-literals
		'prefer-numeric-literals': [1],
		// https://eslint.org/docs/latest/rules/prefer-object-has-own
		'prefer-object-has-own': [1],
		// https://eslint.org/docs/latest/rules/prefer-object-spread
		'prefer-object-spread': [1],
		// https://eslint.org/docs/latest/rules/prefer-promise-reject-errors
		'prefer-promise-reject-errors': [0],
		// https://eslint.org/docs/latest/rules/prefer-regex-literals
		// 'prefer-regex-literals': [1],
		// https://eslint.org/docs/latest/rules/prefer-rest-params
		'prefer-rest-params': [1],
		// https://eslint.org/docs/latest/rules/prefer-spread
		'prefer-spread': [1],
		// https://eslint.org/docs/latest/rules/prefer-template
		'prefer-template': [1],
		// https://eslint.org/docs/latest/rules/quote-props
		'quote-props': [0],
		// https://eslint.org/docs/latest/rules/radix
		'radix': [1, 'as-needed'],
		// https://eslint.org/docs/latest/rules/require-await
		'require-await': [0],
		// https://eslint.org/docs/latest/rules/require-unicode-regexp
		// https://eslint.org/docs/latest/rules/require-yield
		'require-yield': [1],
		// https://eslint.org/docs/latest/rules/sort-imports
		'sort-imports': [0],
		// https://eslint.org/docs/latest/rules/sort-keys
		'sort-keys': [0],
		// https://eslint.org/docs/latest/rules/sort-vars
		'sort-vars': [0],
		// https://eslint.org/docs/latest/rules/spaced-comment
		'spaced-comment': [1, 'always'],
		// https://eslint.org/docs/latest/rules/strict
		'strict': [0],
		// https://eslint.org/docs/latest/rules/symbol-description
		'symbol-description': [0],
		// https://eslint.org/docs/latest/rules/vars-on-top
		'vars-on-top': [1],
		// https://eslint.org/docs/latest/rules/yoda
		'yoda': [0],


		// https://eslint.org/docs/latest/rules/array-bracket-newline
		'array-bracket-newline': [
			1,
			{
				multiline: true,
			},
		],
		// https://eslint.org/docs/latest/rules/array-bracket-spacing
		'array-bracket-spacing': [
			1,
			'never',
			{
				singleValue: false,
				objectsInArrays: false,
				arraysInArrays: false,
			},
		],
		// https://eslint.org/docs/latest/rules/array-element-newline
		'array-element-newline': [1, 'consistent'],
		// https://eslint.org/docs/latest/rules/arrow-parens
		'arrow-parens': [1, 'as-needed'],
		// https://eslint.org/docs/latest/rules/arrow-spacing
		'arrow-spacing': [
			1,
			{
				before: true,
				after: true,
			},
		],
		// https://eslint.org/docs/latest/rules/block-spacing
		'block-spacing': [1],
		// https://eslint.org/docs/latest/rules/brace-style
		'brace-style': [
			1,
			'1tbs',
			{
				allowSingleLine: true,
			},
		],
		// https://eslint.org/docs/latest/rules/comma-dangle
		'comma-dangle': [
			1,
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
				functions: 'always-multiline',
			},
		],
		// https://eslint.org/docs/latest/rules/comma-spacing
		'comma-spacing': [
			1,
			{
				before: false,
				after: true,
			},
		],
		// https://eslint.org/docs/latest/rules/comma-style
		'comma-style': [1],
		// https://eslint.org/docs/latest/rules/computed-property-spacing
		'computed-property-spacing': [1],
		// https://eslint.org/docs/latest/rules/dot-location
		'dot-location': [1, 'property'],
		// https://eslint.org/docs/latest/rules/eol-last
		'eol-last': [1],
		// https://eslint.org/docs/latest/rules/func-call-spacing
		'func-call-spacing': [1],
		// https://eslint.org/docs/latest/rules/function-call-argument-newline
		'function-call-argument-newline': [1, 'consistent'],
		// https://eslint.org/docs/latest/rules/function-paren-newline
		'function-paren-newline': [1, 'consistent'],
		// https://eslint.org/docs/latest/rules/generator-star-spacing
		'generator-star-spacing': [
			1,
			{
				before: false,
				after: true,
			},
		],
		// https://eslint.org/docs/latest/rules/implicit-arrow-linebreak
		'implicit-arrow-linebreak': [1],
		// https://eslint.org/docs/latest/rules/indent
		'indent': [
			1,
			'tab',
			{
				SwitchCase: 1,
				VariableDeclarator: 1,
				outerIIFEBody: 1,
				MemberExpression: 1,
				// FunctionDeclaration: {
				// 	parameters: 1,
				// 	body: 1,
				// },
				// FunctionExpression: {
				// 	parameters: 1,
				// 	body: 1,
				// },
			},
		],
		// https://eslint.org/docs/latest/rules/jsx-quotes
		'jsx-quotes': [1, 'prefer-single'],
		// https://eslint.org/docs/latest/rules/key-spacing
		'key-spacing': [1],
		// https://eslint.org/docs/latest/rules/keyword-spacing
		'keyword-spacing': [1],
		// https://eslint.org/docs/latest/rules/line-comment-position
		'line-comment-position': [1],
		// https://eslint.org/docs/latest/rules/linebreak-style
		'linebreak-style': ['error', 'unix'],
		// https://eslint.org/docs/latest/rules/lines-around-comment
		// lines-around-comment: [1],
		// https://eslint.org/docs/latest/rules/lines-between-class-members
		'lines-between-class-members': [
			1,
			'always',
		],
		// https://eslint.org/docs/latest/rules/max-len
		'max-len': [1, 170],
		// https://eslint.org/docs/latest/rules/max-statements-per-line
		'max-statements-per-line': [
			1, {
				max: 1,
			},
		],
		// https://eslint.org/docs/latest/rules/multiline-ternary
		'multiline-ternary': [0],
		// https://eslint.org/docs/latest/rules/new-parens
		'new-parens': [1, 'always'],
		// https://eslint.org/docs/latest/rules/newline-per-chained-call
		'newline-per-chained-call': [
			1, {
				ignoreChainWithDepth: 2,
			},
		],
		// https://eslint.org/docs/latest/rules/no-extra-parens
		'no-extra-parens': [
			1,
			'all',
			{
				conditionalAssign: false,
				returnAssign: false,
				nestedBinaryExpressions: false,
				enforceForArrowConditionals: false,
				enforceForSequenceExpressions: false,
			},
		],
		// https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs
		'no-mixed-spaces-and-tabs': [0],
		// https://eslint.org/docs/latest/rules/no-multi-spaces
		'no-multi-spaces': [1],
		// https://eslint.org/docs/latest/rules/no-multiple-empty-lines
		'no-multiple-empty-lines': [
			1, {
				max: 3,
			},
		],
		// https://eslint.org/docs/latest/rules/no-tabs
		// https://eslint.org/docs/latest/rules/no-trailing-spaces
		'no-trailing-spaces': [1],
		// https://eslint.org/docs/latest/rules/no-whitespace-before-property
		'no-whitespace-before-property': [1],
		// https://eslint.org/docs/latest/rules/nonblock-statement-body-position
		'nonblock-statement-body-position': [1],
		// https://eslint.org/docs/latest/rules/object-curly-newline
		'object-curly-newline': [1],
		// https://eslint.org/docs/latest/rules/object-curly-spacing
		'object-curly-spacing': [0],
		// https://eslint.org/docs/latest/rules/object-property-newline
		'object-property-newline': [0],
		// https://eslint.org/docs/latest/rules/operator-linebreak
		'operator-linebreak': [1, 'before'],
		// https://eslint.org/docs/latest/rules/padded-blocks
		'padded-blocks': [0],
		// https://eslint.org/docs/latest/rules/padding-line-between-statements
		'padding-line-between-statements': [1],
		// https://eslint.org/docs/latest/rules/quotes
		'quotes': [0, 'single'],
		// https://eslint.org/docs/latest/rules/rest-spread-spacing
		'rest-spread-spacing': [1],
		// https://eslint.org/docs/latest/rules/semi
		'semi': [1, 'always'],
		// https://eslint.org/docs/latest/rules/semi-spacing
		'semi-spacing': [1],
		// https://eslint.org/docs/latest/rules/space-before-blocks
		'space-before-blocks': [1],
		// https://eslint.org/docs/latest/rules/space-before-function-paren
		'space-before-function-paren': [0],
		// https://eslint.org/docs/latest/rules/space-in-parens
		'space-in-parens': [1],
		// https://eslint.org/docs/latest/rules/space-infix-ops
		'space-infix-ops': [1],
		// https://eslint.org/docs/latest/rules/space-unary-ops
		'space-unary-ops': [1],
		// https://eslint.org/docs/latest/rules/switch-colon-spacing
		'switch-colon-spacing': [1],
		// https://eslint.org/docs/latest/rules/template-curly-spacing
		'template-curly-spacing': [1],
		// https://eslint.org/docs/latest/rules/template-tag-spacing
		'template-tag-spacing': [1],
		// https://eslint.org/docs/latest/rules/wrap-iife
		'wrap-iife': [1],
		// https://eslint.org/docs/latest/rules/wrap-regex
		// https://eslint.org/docs/latest/rules/yield-star-spacing
		'yield-star-spacing': [1],



		// TYPESCRIPT
		// "@typescript-eslint/adjacent-overload-signatures": [1],
		// "@typescript-eslint/array-type": [1],
		// // "@typescript-eslint/await-thenable": [1],
		// "@typescript-eslint/ban-types": [1],
		// "@typescript-eslint/class-literal-property-style": [1, 'fields'],
		// "@typescript-eslint/consistent-generic-constructors": [1, 'type-annotation'],
		// "@typescript-eslint/consistent-indexed-object-style": [1, 'record'],
		// "@typescript-eslint/consistent-type-assertions": [
		// 	1, {
		// 		assertionStyle: 'angle-bracket',
		// 	},
		// ],
		"@typescript-eslint/no-useless-constructor": [1],



		"@typescript-eslint/no-use-before-define": [0],
		"@typescript-eslint/no-unused-vars": [
			1, {
				// argsIgnorePattern: '_',
			},
		],
		"@typescript-eslint/explicit-module-boundary-types": [0],
		"@typescript-eslint/no-empty-interface": [
			1,
			{
				allowSingleExtends: false,
			},
		],
		"@typescript-eslint/no-non-null-assertion": 0,
		"@typescript-eslint/no-empty-function": 1,
		"@typescript-eslint/no-explicit-any": 0,
		"@typescript-eslint/no-inferrable-types": [0],
		"@typescript-eslint/ban-types": [0],
		"@typescript-eslint/ban-ts-comment": [0],
	},
};
